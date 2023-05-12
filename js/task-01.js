const categories = document.querySelector("#categories");
const allItem = categories.querySelectorAll(".item");
console.log("Number of categories: ", allItem.length);

const titleEl = allItem.forEach((item) => {
  let nameEl = item.children[0].textContent;
  let quantity = item.children[1].children.length;
  console.log("Category: ", nameEl);
  console.log("Elements: ", quantity);
});
