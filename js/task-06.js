const inputEl = document.querySelector("input");


inputEl.addEventListener("blur", () => {

    if (inputEl.value.length <= inputEl.getAttribute("data-length")) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
    else
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
});