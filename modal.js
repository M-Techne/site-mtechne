const radios = document.querySelectorAll('input[name="choice"]');
const modal = document.getElementById('myModal');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

  // Listen for radio selection
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      modalText.textContent = `You selected: ${radio.value}`;
      modal.style.display = 'block';
    });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });