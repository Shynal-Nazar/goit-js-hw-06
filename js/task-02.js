const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newitemEl = ingredients.map((item) => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = item;
  return newItem;
});
list.append(...newitemEl);
