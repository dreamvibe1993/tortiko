
const loginEmail = document.getElementById('login_email');
const loginPassword = document.getElementById("login_password")
const loginSubmitButton = document.getElementById('login-btn');

const emailInput = document.getElementById('register_email');
const passwordInput = document.getElementById("register_password")
const passwordInputConfirm = document.getElementById("register_confirm_password")
const registerSubmitButton = document.getElementById('register-btn');

// Password registration validation form
function validateRegistration(){
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
register_password.onchange = validateRegistration;
register_confirm_password.onkeyup = validateRegistration;

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
        (passwordInput.value == passwordInputConfirm.value) && (registerCheckbox.checked == true) ? registerButton() : validateRegistration();
});
registerCheckbox.onclick = () => {
    registerCheckbox.setCustomValidity('');
}
// Password registration validation form ends here

// Password login validation form

function validateLogin(){
  if (!loginEmail.value) {
    login_email.setCustomValidity("This field should be filled");
  } else {
      login_email.setCustomValidity("");
  }
  if (loginEmail.value && loginEmail.validity.typeMismatch) {
    login_email.setCustomValidity("Wrong e-mail format");
  } else {
      login_email.setCustomValidity("");
  }
  if (loginPassword.value == '') {
    login_password.setCustomValidity("This field should be filled");
  } else {
      login_password.setCustomValidity("");
  }
}
loginEmail.onchange = () => {
  let x = checkCookie();
    x == true ? pastePassword() : console.log('failed');
  validateLogin();
};
loginPassword.onkeyup = validateLogin;


// Password login validation form ends here

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

loginSubmitButton.addEventListener('click', function() {
  if (loginEmail.value && loginPassword.value) {
    if (loginEmail.validity.valid) {
      if (inputCheckbox.checked == true) {
        loginButton();
        setCookie(user, loginPassword.value, 365);
      }
      if (inputCheckbox.checked == false) {
        loginButton();
    }
    } else {
      validateLogin();
    }
  } else {
    validateLogin();
  }
});


// TODO: the email tips if checkbox can't be checked. the algoritm to erase the data from cookies;

inputCheckbox.onchange = () => {
  if (inputCheckbox.checked) {
    if (loginPassword.value && loginEmail.value) {
        if(loginEmail.validity.valid) {
          inputCheckbox.checked = true;
          checkCookie();
        } else {
          login_email.setCustomValidity("Wrong e-mail format");
          inputCheckbox.checked = false;
        }
    } else {
      validateLogin();
      inputCheckbox.checked = false;
    }
  }
  // if (!inputCheckbox.checked)
}

function pastePassword() {
  let c = document.cookie;
  let d = loginEmail.value;
  let ans = ''
  for (let i = 0; i<c.length; i++) {
    if (c[i] == '=' || c[i] == ';') {

        if (c[i] == '=') {
          ans += ' ';
        }
        if (c[i] == ';') {
          ans += '';
        }

      } else {
        ans += c[i];
      }
  }
  let j = ans.split(' ');
  let p = j[j.indexOf(d) + 1];
  loginPassword.value = p;
}



function setCookie(cname, cvalue, exdays) {
  var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires=" + d.toGMTString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
  }
}
return "";
}

function checkCookie() {
  if (loginEmail.value) {
    var user = getCookie(`${loginEmail.value}`);
    if (user != "") {
      return true;
    } else {
      alert("no such user");
      if (loginPassword.value) {
      user = loginEmail.value;
        if (user != "" && user != null) {
          setCookie(user, loginPassword.value, 30);
        }
      } else {
        validateLogin();
      }
    }
  } else {
    validateLogin();
  }
}

//cookies ends here

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
