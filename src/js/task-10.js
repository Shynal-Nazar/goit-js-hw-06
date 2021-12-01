const refEl = {
    inputEl: document.querySelector("input"),
    btnCreate: document.querySelector('[data-create]'),
    btndestroy: document.querySelector('[data-destroy]'),
    boxesEl: document.querySelector("#boxes"), 
};

const createBoxes = (amount) => {
 amount = refEl.inputEl.value;
  
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();

    let sizeBox = 30 + i * 10;
    newDiv.style.width = `${sizeBox}px`;
    newDiv.style.height = `${sizeBox}px`;
    refEl.boxesEl.append(newDiv)
  }
};

const destroyBoxes = () => {
  refEl.boxesEl.innerHTML = '';
  refEl.inputEl.value = ''
};

refEl.btnCreate.addEventListener("click", createBoxes);
refEl.btndestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
