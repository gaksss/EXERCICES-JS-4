const listener = document.querySelector("body");
const para = document.createElement("p");
const texte = document.createTextNode("BRAVOOOOOOO");
para.appendChild(texte);
let combi = []; // Initialisation de la combinaison de touches

listener.addEventListener("keyup", handleKeyDown);

function handleKeyDown(event) {
  if (["m", "c"].includes(event.key) && !combi.includes(event.key)) {
    combi.push(event.key); // Ajoute la touche si elle n'est pas déjà dans la combinaison
  console.log(event.key);
  
  }

  // Vérifie si la combinaison "m" et "c" est pressée
  if (combi.sort().join("") === "cm") {
    // Si le paragraphe n'est pas encore ajouté, on l'ajoute
    if (!document.body.contains(para)) {
      listener.appendChild(para);
    }
  }

  // Si une troisième touche est pressée (par exemple, "t"), change la couleur
  if (event.key === "r") {
    para.classList.add("red");
  }
}