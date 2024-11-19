const modalOpen = document.querySelector(".modalIn");
const button = document.querySelector("#show");
const body = document.querySelector("body");

button.addEventListener("click", handleModalShow);


function handleModalShow(event) {
  modalOpen.classList.remove('modalIn');
    
  }
