let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = "enter full name";
    return false;
  }
  nameError.innerHTML =
    '<ion-icon class="ii" name="checkmark-circle"></ion-icon>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "phone no. is required";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "invalid number";
    return false;
  }
  if (phone.length != 10) {
    phoneError.innerHTML = "phone no. requires 10 digit";
    return false;
  }

  phoneError.innerHTML =
    '<ion-icon class="ii" name="checkmark-circle"></ion-icon>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "invalid email";
    return false;
  }
  emailError.innerHTML =
    '<ion-icon class="ii" name="checkmark-circle"></ion-icon>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + " more characters required ";
    return false;
  }
  messageError.innerHTML =
    '<ion-icon class="ii" name="checkmark-circle"></ion-icon>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Invalid details";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
