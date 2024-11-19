const grid = document.querySelectorAll("div");

grid.forEach((square) => {
  square.addEventListener("click", handleSquareColor);
});
const colors = ["red", "blue", "green", "pink", "purple"];
let currentColorIndex = -1;
function handleSquareColor(event) {
    
  const nextColorIndex = ++currentColorIndex % colors.length;
  
  let square = event.target;
  console.log(square);
  
  square.classList.add(colors[nextColorIndex]);
  
}
