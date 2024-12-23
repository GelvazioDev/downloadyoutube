const express = require('express')
const { downloadVideo, loadQuantidadeVideos, downloadVideoMp3 } = require('./downloadVideo.js')
const path = require('path')
const cors = require('cors')
const ytdl = require('@distube/ytdl-core')

const app = express()
app.use(express.json())

app.use(
  cors({
    origin: '*',
    methods: 'GET, POST, OPTIONS, PATCH, DELETE, PUT',
    allowedHeaders:
      'Content-Type, Authorization, Accept, X-Requested-With, credentials', // Certifique-se de incluir 'credentials'
    credentials: true
  })
)
app.options('*', cors())

app.get('/', (req, res) => {
  const ping = new Date()
  ping.setHours(ping.getHours() - 3)
  console.log(
    `Ping at: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  )
  res.sendStatus(200)
})

app.get('/info', async (req, res) => {
  const { url } = req.query

  if (url) {
    const isValid = ytdl.validateURL(url)

    if (isValid) {
      const info = (await ytdl.getInfo(url)).videoDetails

      const title = info.title
      const thumbnail = info.thumbnails[2].url

      res.send({ title: title, thumbnail: thumbnail })
    } else {
      res.status(400).send('Invalid url')
    }
  } else {
    res.status(400).send('Invalid query')
  }
})

app.get('/mp3old', async (req, res) => {
  const { url } = req.query

  if (url) {
    const isValid = ytdl.validateURL(url)

    if (isValid) {
      const videoName = (await ytdl.getInfo(url)).videoDetails.title

      res.header(
        'Content-Disposition',
        `attachment; filename="${videoName}.mp3"`
      )
      res.header('Content-type', 'audio/mpeg3')

      ytdl(url, { quality: 'highestaudio', format: 'mp3' }).pipe(res)

      const filePath = await downloadVideoMp3(url)
    } else {
      res.status(400).send('Invalid url')
    }
  } else {
    res.status(400).send('Invalid query')
  }
})

app.post('/mp3', async (req, res) => {
  const { url } = req.body
  console.log(url)
  if (!url) {
    return res.status(400).json({ error: 'URL do vídeo é necessária' })
  }
  try {
    const filePath = await downloadVideoMp3(url)
    console.log('filePath:', filePath) // Adicione este log para depuração

    // Retorna o caminho relativo
    const relativeFilePath = path
      .relative(__dirname, filePath)
      .replace(/\\/g, '/')
    res
      .status(200)
      .json({
        message: 'Download concluído com sucesso',
        filePath: relativeFilePath
      })
  } catch (error) {
    console.error('Erro ao baixar o vídeo:', error)
    res.status(500).json({ error: 'Erro ao baixar o vídeo' })
  }
})

app.get('/mp4', async (req, res) => {
  const { url } = req.query

  if (url) {
    const isValid = ytdl.validateURL(url)

    if (isValid) {
      const videoName = (await ytdl.getInfo(url)).videoDetails.title

      res.header(
        'Content-Disposition',
        `attachment; filename="${videoName}.mp4"`
      )

      ytdl(url, {
        quality: 'highest',
        format: 'mp4'
      }).pipe(res)
    } else {
      res.status(400).send('Invalid url')
    }
  } else {
    res.status(400).send('Invalid query')
  }
})

app.post('/download', async (req, res) => {
  const { url } = req.body
  console.log(url)
  if (!url) {
    return res.status(400).json({ error: 'URL do vídeo é necessária' })
  }
  try {
    const filePath = await downloadVideo(url)
    console.log('filePath:', filePath) // Adicione este log para depuração

    // Retorna o caminho relativo
    const relativeFilePath = path
      .relative(__dirname, filePath)
      .replace(/\\/g, '/')
    res
      .status(200)
      .json({
        message: 'Download concluído com sucesso',
        filePath: relativeFilePath
      })
  } catch (error) {
    console.error('Erro ao baixar o vídeo:', error)
    res.status(500).json({ error: 'Erro ao baixar o vídeo' })
  }
})

app.get('/videos/:filename', (req, res) => {
  const { filename } = req.params
  const filePath = path.join(__dirname, 'videos', filename)

  const qualidade = loadQuantidadeVideos()

  try {
    res.status(200).download(filePath, err => {
      if (err) {
        console.error('Erro ao fornecer o vídeo:', err)
        if (!res.headersSent) {
          res.status(500).send('Erro ao fornecer o vídeo.')
        }
      }
    })
  } catch (error) {
    console.error('Erro ao realizar download:', error)
    res.status(500).send('Erro ao realizar download do vídeo.')
  }
})

// const videoUrl = 'https://youtu.be/DDJX_vor5N8?si=bo4zJJAf1eIdyCT7';
// downloadVideo(videoUrl);

module.exports = { app }
