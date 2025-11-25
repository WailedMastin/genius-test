const modal = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.modal-btn-open');
const closeModalBtn = document.querySelector('.modal-btn-close');

const toggleModal = () => {
  if (!modal) return;
  modal.classList.toggle('is-hidden');
};

if (openModalBtn) openModalBtn.addEventListener('click', toggleModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', toggleModal);
