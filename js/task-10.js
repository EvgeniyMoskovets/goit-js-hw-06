function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBox = document.querySelector("#boxes");
const buttonsEl = document.querySelectorAll("#controls button");
const inputEl = document.querySelector("#controls input");

let amount = 0;
inputEl.addEventListener("input", () => {
  if (inputEl.value > 0) {
    return (amount = inputEl.value);
  }
});

buttonsEl[0].addEventListener("click", createBoxes);
buttonsEl[1].addEventListener("click", destroyBoxes);

function createBoxes() {
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    const newDiv = document.createElement("div");
    newDiv.style.width = 30 + i * 10 + "px";
    newDiv.style.height = 30 + i * 10 + "px";
    newDiv.style.backgroundColor = randomColor;
    divBox.appendChild(newDiv);
  }
}

function destroyBoxes() {
  divBox.innerHTML = "";
}
