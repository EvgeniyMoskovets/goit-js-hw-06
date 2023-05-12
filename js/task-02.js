const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  const listEl = document.createElement("li");
  listEl.classList.add(`${ingredient}`);
  listEl.textContent = `${ingredient}`;
  ingredientsList.appendChild(listEl);
  console.log(listEl);
}
