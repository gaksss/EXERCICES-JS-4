const grid = document.querySelectorAll("div");
const colors = ["red", "blue", "green", "pink", "purple"];

// Initialiser un objet pour suivre l'indice de couleur de chaque carré
const colorIndices = new Map();

// Ajouter un gestionnaire d'événements à chaque carré
grid.forEach((square) => {
  // Initialiser l'indice de couleur à -1 pour chaque carré
  colorIndices.set(square, -1);

  // Ajouter l'événement de clic
  square.addEventListener("click", handleSquareColor);
});

function handleSquareColor(event) {
  const square = event.target;

  // Supprimer toutes les anciennes couleurs
  colors.forEach((color) => square.classList.remove(color));

  // Récupérer et mettre à jour l'indice de couleur pour ce carré
  const currentColorIndex = colorIndices.get(square);
  const nextColorIndex = (currentColorIndex + 1) % colors.length;

  // Appliquer la nouvelle couleur
  const nextColor = colors[nextColorIndex];
  square.classList.add(nextColor);

  // Mettre à jour l'indice pour ce carré
  colorIndices.set(square, nextColorIndex);

  console.log(`Square: ${square}, Color: ${nextColor}`);
}
