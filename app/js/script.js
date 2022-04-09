const email = document.getElementById("email");
const icon = document.querySelector(".validation-icon");
const message = document.querySelector('.error-message')

const regx = /^[a-z]+\.?[a-z0-9]+@[a-z]+\.?([a-z]+)?\.[a-z]{2,3}$/;

function myFunction() {
    if(email.value.match(regx)) {
        email.classList.add("valid");
        email.classList.remove("invalid")
        icon.classList.add('valid')
        icon.classList.remove('invalid')
        message.style.display = "none"
    }else {
        email.classList.add("invalid");
        email.classList.remove("valid")
        icon.classList.add('invalid')
        icon.classList.remove('valid')
        message.style.display = "block"
    }

    if(email.value == "") {
        // email.classList.remove("invalid");
        email.classList.remove("valid")
        icon.classList.remove('invalid')
        icon.classList.remove('valid')
        message.style.display = "none"
    }
}