const counterEl = document.querySelectorAll("#counter button");
const valueEl = document.querySelector("#value");
let counterValue = 0;

counterEl[1].addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
});

counterEl[0].addEventListener("click", () => {
  counterValue--;
  valueEl.textContent = counterValue;
});
