const elements = document.querySelector("img");
const show = document.querySelector("#show");
const swapR = document.querySelector("#swapR");
const swapL = document.querySelector("#swapL");

show.addEventListener("click", handleImgShow);
swapR.addEventListener("click", handleImgSwapR);
swapL.addEventListener("click", handleImgSwapL);

function handleImgShow(event) {
  elements.classList.add("imgShown");
}
let i = 1;
function handleImgSwapR(event) {
  if (i <= 5) {
    elements.src = "./images/image" + i + ".jpg";
    i++;
  } else {
    i = 1;
  }
}

function handleImgSwapL(event) {
  if (i <= 5 && i > 1) {
    elements.src = "./images/image" + i + ".jpg";
    i--;
  } else {
    i = 5;
  }
}
