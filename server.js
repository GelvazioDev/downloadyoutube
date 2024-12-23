const port = 3000;

const {app} = require('./app.js');
// const {job} = require('./deletarVideo.js');
// alef dev
// job.start();

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
});

