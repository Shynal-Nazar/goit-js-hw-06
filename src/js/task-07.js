const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
    console.log(inputEl.value)
    textEl.style.fontSize = `${inputEl.value}px`;
});