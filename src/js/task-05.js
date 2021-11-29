const refEl = {
    inputEl: document.querySelector("#name-input"),
    outputSpanEl: document.querySelector("#name-output")
};
console.log(refEl.inputEl.textContent)

refEl.inputEl.addEventListener("input", (event) => {

    if (refEl.inputEl.value === "") {
        refEl.outputSpanEl.textContent = 'Anonymous'
    }
    else
         refEl.outputSpanEl.textContent = event.currentTarget.value;
});