const form =  document.querySelector('.login-form')
console.log(form)
form.addEventListener("submit", onformSabmit);
function onformSabmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value
    const password = formElements.password.value
   

 if (email === "" || password === "") {
    return alert( "All lines must be filled" );
  }


    const formData = {
        email,
        password
    }

    console.log(formData)
    event.currentTarget.reset();
} 