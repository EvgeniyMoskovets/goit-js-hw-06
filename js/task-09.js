function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorText = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}
