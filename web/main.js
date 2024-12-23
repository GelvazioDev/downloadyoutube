import { createModal } from './src/components/modal.js';
import { downloadVideo } from './src/api/downloadService.js';

const videoUrlInput = document.getElementById('videoUrl');
const downloadBtn = document.getElementById('downloadBtn');
const statusDiv = document.getElementById('status');
const modal = createModal();

async function handleDownload(url) {
  try {
    statusDiv.textContent = 'Downloading...';
    statusDiv.className = 'status';
    downloadBtn.disabled = true;

    const response = await downloadVideo(url);
    
    modal.show(
      'Download Complete',
      response.message,
      response.filePath
    );
    
    statusDiv.textContent = '';
  } catch (error) {
    modal.show(
      'Error',
      `Download failed: ${error.message}`,
      ''
    );
  } finally {
    downloadBtn.disabled = false;
  }
}

downloadBtn.addEventListener('click', () => {
  const url = videoUrlInput.value.trim();
  if (!url) {
    modal.show('Error', 'Please enter a valid URL', '');
    return;
  }
  handleDownload(url);
});

videoUrlInput.addEventListener('input', () => {
  statusDiv.textContent = '';
});