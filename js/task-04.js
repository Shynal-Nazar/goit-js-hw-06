const refEl = {
    btnDekrement: document.querySelector('[data-action="decrement"]'),
    btnInkrement: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector("#value")   
};

refEl.btnDekrement.addEventListener("click", () => {
    refEl.valueEl.textContent = parseInt(refEl.valueEl.textContent) - 1;
});

refEl.btnInkrement.addEventListener("click", () => {
    refEl.valueEl.textContent = parseInt(refEl.valueEl.textContent) + 1;
});