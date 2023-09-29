// Variables
const login = document.querySelector(".nav_login");
const submit = document.querySelector(".btn-submit");
const modal = document.querySelector("#modal-id");
const closeModal = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
let inputName = document.getElementById("exampleInputName");
let inputEmail = document.getElementById("exampleInputEmail");
let inputNumber = document.getElementById("exampleInputNumber");
let inputPassword = document.getElementById("exampleInputPassword1");
let inputConfirmPassword = document.getElementById("exampleInputPassword2");

////////////////////////

const closeModalFunc = function () {
  modal.style.display = "none";
  overlay.classList.remove("blur");
};

//  Validations
// 1. Name validation
const validateName = function () {
  let username = inputName.value;
  console.log(username);
  let validName = /^[A-Za-z ]{3,50}$/;
  if (!validName.test(username)) {
    document.getElementById("errorname").innerHTML = "Please use only Alpabets";
    return false;
  } else {
    document.getElementById("errorname").innerHTML = " ";
  }
};

// 2. Email validation
const validateEmail = function () {
  let email = inputEmail.value;
  let validEmail = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
  if (validEmail.test(email)) {
    document.getElementById("erroremail").innerHTML = " ";
  } else {
    document.getElementById("erroremail").innerHTML = "Enter correct email";
    return false;
  }
};
// 3. Phone Number validation
const validateNumber = function () {
  let number = inputNumber.value;
  let validNumber = /^[6789][0-9]{9}$/;
  if (validNumber.test(number)) {
    document.getElementById("errornumber").innerHTML = " ";
  } else {
    document.getElementById("errornumber").innerHTML =
      "Phone number must only start with 6, 7, 8 or 9";
    return false;
  }
};

// 4. Password validation
const validatePassword = function () {
  let password = inputPassword.value;
  let validPassword = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;
  if (validPassword.test(password)) {
    document.getElementById("errorpassword").innerHTML = " ";
  } else {
    document.getElementById("errorpassword").innerHTML =
      "Password must only contain A-Z, a-z, 0-9, _!@#$%^&*";
    return false;
  }
};

// 5. Confirm password validation
const validateConfirmPassword = function () {
  let cpassword = inputConfirmPassword.value;
  let password = inputPassword.value;
  if (cpassword.match(password)) {
    document.getElementById("errorcpassword").innerHTML = " ";
    return true;
  } else {
    document.getElementById("errorcpassword").innerHTML =
      "Password is not matching";
    return false;
  }
};

////////////////////////

// Login
login.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  overlay.classList.add("blur");

  document.querySelector("body").addEventListener("click", function (el) {
    if (el.target.classList.contains("hidden")) {
      modal.style.display = "none";
      overlay.classList.remove("blur");
    }
  });
  modal.addEventListener("keyup", function (el) {
    el.preventDefault();
    let target = el.target;
    if (target.classList.contains("form-control")) {
      if (target.id === "exampleInputName") validateName();
      else if (target.id === "exampleInputEmail") validateEmail();
      else if (target.id === "exampleInputNumber") validateNumber();
      else if (target.id === "exampleInputPassword1") validatePassword();
      else if (target.id === "exampleInputPassword2") validateConfirmPassword();
    }
  });
});

// Close Modal
closeModal.addEventListener("click", closeModalFunc);
