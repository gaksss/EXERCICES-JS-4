const modalOpen = document.querySelector("#modal");
const button = document.querySelector("#show");
const body = document.querySelector("body");

button.addEventListener("click", handleModalShow);

function handleModalShow(event) {
  modalOpen.classList.toggle("modal");
  modalOpen.classList.toggle("modalOpen");
  body.classList.toggle("bgGrey");

  // GESTIONNAIRE CLICK EN DEHORS
  document.addEventListener("click", handleOutsideClick);
}

function handleOutsideClick(event) {
  if (!modalOpen.contains(event.target) && !button.contains(event.target)) {
    modalOpen.classList.remove("modalOpen");
    modalOpen.classList.add("modal");
    body.classList.remove("bgGrey");

    // Retire l'évenement de click out pour eviter les appels inutiles
    document.removeEventListener("click", handleOutsideClick);
  }
}
