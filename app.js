//grabbing password, confirm password and form in a variable
const newPasswordInput = document.getElementById("new-password");
const confirmPasswordInput = document.getElementById("confirm-password");
const form = document.querySelector(".reset-password");

//password validation Errors
const passwordMatchError = document.querySelector("#password-match-error");
const passwordLengthError = document.querySelector("#password-length-error");
const passwordLowercaseError = document.querySelector(
  "#password-lowercase-error"
);
const passwordUppercaseError = document.querySelector(
  "#password-uppercase-error"
);
const passwordSpecialCharError = document.querySelector(
  "#password-specialchar-error"
);
const passwordNumberError = document.querySelector("#password-number-error");

//password validations success

const passwordMatchSuccess = document.querySelector("#password-match-success");
const passwordLengthSuccess = document.querySelector(
  "#password-length-success"
);
const passwordLowercaseSuccess = document.querySelector(
  "#password-lowercase-success"
);
const passwordUppercaseSuccess = document.querySelector(
  "#password-uppercase-success"
);
const passwordSpecialCharSuccess = document.querySelector(
  "#password-specialchar-success"
);
const passwordNumberSuccess = document.querySelector(
  "#password-number-success"
);

//Regex for password input validations
const passwordLowercaseRegex = /[a-z]/;
const passwordUppercaseRegex = /[A-Z]/;
const passwordSpecialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const passwordNumberRegex = /[0-9]/;
const passwordLengthRegex = /^.{8,}$/;

//event listener on form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //validation of password matching
  if (newPasswordInput.value !== confirmPasswordInput.value) {
    passwordMatchError.style.display = "block";
    return;
  } else {
    passwordMatchError.style.display = "none";
  }

  //password length check - min 8 chars
  if (!passwordLengthRegex.test(newPasswordInput.value)) {
    passwordLengthError.style.display = "block";
  } else {
    passwordLengthError.style.display = "none";
    passwordLengthSuccess.style.display = "block";
  }

  //password lowercase check
  if (!passwordLowercaseRegex.test(newPasswordInput.value)) {
    passwordLowercaseError.style.display = "block";
  } else {
    passwordLowercaseError.style.display = "none";
    passwordLowercaseSuccess.style.display = "block";
  }

  //password uppercase check
  if (!passwordUppercaseRegex.test(newPasswordInput.value)) {
    passwordUppercaseError.style.display = "block";
  } else {
    passwordUppercaseError.style.display = "none";
    passwordUppercaseSuccess.style.display = "block";
  }

  //password special character check
  if (!passwordSpecialCharRegex.test(newPasswordInput.value)) {
    passwordSpecialCharError.style.display = "block";
  } else {
    passwordSpecialCharError.style.display = "none";
    passwordSpecialCharSuccess.style.display = "block";
  }

  //password number check
  if (!passwordNumberRegex.test(newPasswordInput.value)) {
    passwordNumberError.style.display = "block";
  } else {
    passwordNumberError.style.display = "none";
    passwordNumberSuccess.style.display = "block";
  }
});
