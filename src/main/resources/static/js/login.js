
const loginEmail = document.getElementById('login_email');
const loginPassword = document.getElementById("login_password")
const loginSubmitButton = document.getElementById('login-btn');

const emailInput = document.getElementById('register_email');
const passwordInput = document.getElementById("register_password")
const passwordInputConfirm = document.getElementById("register_confirm_password")
const registerSubmitButton = document.getElementById('register-btn');

// Password validation form
function validatePassword(){
  if (passwordInput.value != passwordInputConfirm.value) {
    register_confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
      register_confirm_password.setCustomValidity('');
  }

  if (!registerCheckbox.checked) {
    registerCheckbox.setCustomValidity("The checkbox's nescessary");
  } else {
      registerCheckbox.setCustomValidity('');
  }

}
register_password.onchange = validatePassword;
register_confirm_password.onkeyup = validatePassword;


function registerButton() {
    const bodyRegister = {
        username: emailInput.value,
        password: passwordInput.value,
    };
    fetch('http://localhost:8080/api/users/create-user', {
        method: 'POST',
        body: JSON.stringify(bodyRegister),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

registerSubmitButton.addEventListener('click', function() {
        (passwordInput.value == passwordInputConfirm.value) && (registerCheckbox.checked == true) ? registerButton() : validatePassword();
});
registerCheckbox.onclick = () => {
    registerCheckbox.setCustomValidity('');
}


function loginButton() {

        const bodyLogin = {
            username: loginEmail.value,
            password: loginPassword.value,
        };

        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(bodyLogin),
            headers: {
                'Content-Type': 'application/json',
            }
        })
}

loginSubmitButton.addEventListener('click', loginButton);


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
