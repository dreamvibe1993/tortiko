
const loginEmail = document.getElementById('username');
const loginPassword = document.getElementById("password")
const loginSubmitButton = document.getElementById('login-btn');

const emailInput = document.getElementById('register_email');
const passwordInput = document.getElementById("register_password")
const passwordInputConfirm = document.getElementById("register_confirm_password")
const registerSubmitButton = document.getElementById('register-btn');


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


// TODO: login tips!!! emailchanging-bug

//cookies
inputCheckbox.onchange = () => {
    if(!inputCheckbox.checked && loginEmail.value) {
      deleteCookieEntry(loginEmail.value);
    }
    if (inputCheckbox.checked && loginEmail.value) {
      if (loginPassword.value && username.validity.valid) {
        setCookie(loginEmail.value, loginPassword.value, 365);
      }
      if (!username.validity.valid) {
        loginEmail.setCustomValidity("Неправильно");
        inputCheckbox.checked = false;
      }
      if (!loginPassword.value) {
        inputCheckbox.checked = false;
      }
    }
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
    inputCheckbox.checked = true;
}

loginPassword.onclick = () => {
    let x = checkCookie();
    x == true ? pastePassword() : console.log('failed');
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

function deleteCookieEntry(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      console.log(ca);
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          var expires1970 = "expires=Thu, 01 Jan 1970 00:00:01 GMT";
          var cvalue = 'todelete'
          ca[i] = " " + cname + "=" + cvalue + ";" + expires1970 + ";path=/";
          document.cookie = ca.join(';');
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
      console.log("nosuchuser");
      user = loginEmail.value;
      if (loginPassword.value) {
          if (user != "" && user != null) {
            setCookie(user, loginPassword.value, 30);
          }
      } else {
        return;
      }
    }
  } else {
    return;
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
