const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const newitemEl = document.createElement("li");
  newitemEl.classList.add("item");
  newitemEl.textContent = ingredients[i];

  list.append(newitemEl);
}
