const cases = document.querySelectorAll(".case");

cases.forEach((square) => {
  // Gérer l'événement de survol (mouseenter) pour enlever le flou
  square.addEventListener("mouseenter", () => {
    square.classList.remove("caseBlurred");
  });

  // Gérer l'événement de sortie de la souris (mouseout) pour remettre le flou
  square.addEventListener("mouseout", () => {
    square.classList.add("caseBlurred");
  });

  // Gérer le redimensionnement lors du clic (mousedown et mouseup)
  square.addEventListener("mousedown", () => {
    square.style.width = "400px"; // Agrandir la case lors du clic
  });

  square.addEventListener("mouseup", () => {
    square.style.width = "200px"; // Reprendre la taille originale
  });
});
