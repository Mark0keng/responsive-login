function togglePassword() {
  var passwordInput = document.getElementById("pwInput");
  var passwordInputFull = document.getElementById("pwInput-full");
  var eyeIcon = document.getElementById("eyeIcon");

  if (
    passwordInput.type === "password" ||
    passwordInputFull.type === "password"
  ) {
    passwordInput.type = "text";
    passwordInputFull.type = "text";
    eyeIcon.className = "fa-solid fa-eye-slash fa-2xs";
  } else {
    passwordInput.type = "password";
    passwordInputFull.type = "password";
    eyeIcon.className = "fa-solid fa-eye fa-2xs";
  }
}

var passwordInput = document.getElementById("pwInput");
var passwordInputFull = document.getElementById("pwInput-full");
var emailInput = document.getElementById("email");
var emailInputFull = document.getElementById("emailFull");

passwordInput.addEventListener("input", function () {
  passwordInputFull.value = passwordInput.value;
});

passwordInputFull.addEventListener("input", function () {
  passwordInput.value = passwordInputFull.value;
});

emailInput.addEventListener("input", function () {
  emailInputFull.value = emailInput.value;
});

emailInputFull.addEventListener("input", function () {
  emailInput.value = emailInputFull.value;
});
