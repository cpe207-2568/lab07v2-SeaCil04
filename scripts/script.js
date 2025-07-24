// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

passwordConfirmInput.onkeyup = () => {
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
};


// add callback function for submit button.
submitBtn.onclick = () => {

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  isLastNameOk = false;
  if (lastNameInput.value !== "") {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  } else {
    lastNameInput.classList.add("is-invalid");
  }
  // validate email
  isEmailOk = false;
  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  } else {
    emailInput.classList.add("is-invalid");
  }
  // validate password
  isPasswordOk = false;
  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }
  // validate confirm password
  isConfirmPasswordOk = false;
  if (
    passwordConfirmInput.value === passwordInput.value &&
    passwordInput.value.length >= 6
  ) {
    passwordConfirmInput.classList.add("is-valid");
    isConfirmPasswordOk = true;
  } else {
    passwordConfirmInput.classList.add("is-invalid");
  }
  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPasswordOk &&
    isConfirmPasswordOk
  ) {
    alert("Registered successfully");
  }
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.classList.remove("is-valid", "is-invalid");
  lastNameInput.classList.remove("is-valid", "is-invalid");
  emailInput.classList.remove("is-valid", "is-invalid");
  passwordInput.classList.remove("is-valid", "is-invalid");
  passwordConfirmInput.classList.remove("is-valid", "is-invalid");

  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  passwordConfirmInput.value = "";
};