const allCategoriesEl = document.querySelector("#categories").children;

const namberCategories = allCategoriesEl.length;

console.log(`Number of categories:`, namberCategories);

const oneCategoryEL = document.querySelectorAll(".item");

for (let i = 0; i < oneCategoryEL.length; i += 1) {
  const nameCategory = oneCategoryEL[i].firstElementChild.textContent;

  const allElementsEl = oneCategoryEL[i].querySelector("ul").children.length;

  console.log(`Category:`, nameCategory);
  console.log(`Elements:`, allElementsEl);
}
