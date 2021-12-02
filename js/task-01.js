const allCategoriesEl = document.querySelector("#categories").children;

const namberCategories = allCategoriesEl.length;

console.log(`Number of categories:`, namberCategories);

const oneCategoryEL = document.querySelectorAll(".item");

[...oneCategoryEL].map((item) => {
  const nameCategory = item.firstElementChild.textContent;
  const allElementsEl = item.querySelector("ul").children.length;

  console.log(`Category:`, nameCategory);
  console.log(`Elements:`, allElementsEl);
});
