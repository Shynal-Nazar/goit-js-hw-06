const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", () => {
  console.log(inputEl.value.length);
  console.log(inputEl.getAttribute("data-length"));
  if (inputEl.value.length !== parseInt(inputEl.getAttribute("data-length"))) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else inputEl.classList.replace("invalid", "valid");
});
