const refEl = {
  btnDekrement: document.querySelector('[data-action="decrement"]'),
  btnInkrement: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

let value = 0;

refEl.btnDekrement.addEventListener("click", () => {
  value -= 1;
  refEl.valueEl.textContent = value;
});

refEl.btnInkrement.addEventListener("click", () => {
  value += 1;
  refEl.valueEl.textContent = value;
});
