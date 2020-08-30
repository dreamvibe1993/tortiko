
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById("password")
const passwordInputConfirm = document.getElementById("confirm_password")
const submitButton = document.getElementById('submit_btn');

// Password validation form
function validatePassword(){
  if(passwordInput.value != passwordInputConfirm.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


function handleSubmitButton() {
        const body = {
            email: emailInput.value,
            password: passwordInput.value,
        };

        fetch('http://localhost:8080/create-user', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        })
console.log(body);
}
submitButton.addEventListener('click', handleSubmitButton);


//login - registration change buttons
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-450px";
    y.style.left = "50px";
    z.style.left = "110px";
     }
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}



