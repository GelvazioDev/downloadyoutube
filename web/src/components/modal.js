export function createModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2 class="modal-title"></h2>
      <p class="modal-message"></p>
      <p class="modal-filepath"></p>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.close-button');
  closeBtn.onclick = () => modal.style.display = 'none';

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  return {
    show: (title, message, filePath) => {
      modal.querySelector('.modal-title').textContent = title;
      modal.querySelector('.modal-message').textContent = message;
      modal.querySelector('.modal-filepath').textContent = filePath;
      modal.style.display = 'block';
    },
    hide: () => {
      modal.style.display = 'none';
    }
  };
}