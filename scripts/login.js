let $ = document;

// Input Variables
let nameInput = $.querySelector("#name-inp");
let phoneInput = $.querySelector("#phone-inp");
let emailInput = $.querySelector("#email-inp");
let passInput = $.querySelector("#pass-inp");
let loggedName = $.querySelector("#log-name__inp");
let loggedPass = $.querySelector("#log-pass__inp");
// Forms
let registerForm = $.querySelector(".form-reg__holder");
let loginForm = $.querySelector(".form-login__holder");
// Buttons
let regBtn = $.querySelector("#reg-btn");
let switchLog = $.querySelector("#switch-log");
let switchReg = $.querySelector("#switch-reg");
let loginBtn = $.querySelector("#login-btn");
// Warnings
let nameWarn = $.querySelector("#name-warn");
let passWarn = $.querySelector("#pass-warn");
let phoneWarn = $.querySelector("#phone-warn");
let emailWarn = $.querySelector("#email-warn");
// Modals
let modalSection = $.querySelector(".warning-modal__section");
let modalContent = $.querySelector(".warning-modal");
let modalImage = $.querySelector(".warning-modal__img");
let modalText = $.querySelector(".warning-modal__text");
// Form Title
let formTitle = $.querySelector(".form-right__title");

let usersAccounts = [];

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let nameInputVal = nameInput.value;
  let phoneInputVal = phoneInput.value;
  let emailInputVal = emailInput.value;
  let passInputVal = passInput.value;

  if (
    nameInputVal.length < 8 ||
    nameInputVal.length > 12 ||
    nameInputVal === ""
  ) {
    checkPassAndNameInput(nameWarn,"block","Please enter between 8 & 12 chars","redّ");
  } else if (phoneInputVal === "") {
    checkEmailAndPhoneInput(phoneWarn,"block","Inputs must be filled!","red");
  } else if (emailInputVal === "") {
    checkEmailAndPhoneInput(emailWarn,"block","Inputs must be filled!","red");
  } else if (
    passInputVal.length < 8 ||
    passInputVal.length > 12 ||
    passInputVal === ""
  ) {
    checkPassAndNameInput(passWarn,"block","Please enter between 8 & 12 chars","red");
  } else {
    nameWarn.style.display = "none";
    phoneWarn.style.display = "none";
    emailWarn.style.display = "none";
    passWarn.style.display = "none";

    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    passInput.value = "";

    modalDtails ("visible","Informatins was saved !","images/login-images-icons/correct.png");

    setTimeout(hideModal,3000);

    let newUserAccount = {
      id: usersAccounts.length + 1,
      name: nameInputVal,
      pass: passInputVal,
      email: emailInputVal,
      phone: phoneInputVal,
      balance:0
    };
    usersAccounts.push(newUserAccount);
    setInLocalStorage(usersAccounts);
  }
});

switchLog.addEventListener("click", function () {
  switchLog.classList.add("active");
  switchReg.classList.remove("active");
  registerForm.classList.add("hide");
  if (registerForm.classList.contains("show")) {
    registerForm.classList.remove("show");
  }
  loginForm.classList.add("show");
  if (loginForm.classList.contains("hide")) {
    loginForm.classList.remove("hide");
  }
  formTitle.innerHTML = "Login Form";
});

switchReg.addEventListener("click", function () {
  switchLog.classList.remove("active");
  switchReg.classList.add("active");
  registerForm.classList.add("show");
  if (registerForm.classList.contains("hide")) {
    registerForm.classList.remove("hide");
  }
  loginForm.classList.add("hide");
  if (loginForm.classList.contains("show")) {
    loginForm.classList.remove("show");
  }
  formTitle.innerHTML = "Register Form";
});


// Login Secton
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let loggedNameval = loggedName.value;
  let loggedPassVal = loggedPass.value;

  getInformations(loggedNameval, loggedPassVal);
});

// Functions 

function checkPassAndNameInput (warnElem,warnDisplay,warnText,warnColor) {
  warnElem.style.display = warnDisplay;
  warnElem.innerHTML = warnText;
  warnElem.style.color = warnColor;
}
function checkEmailAndPhoneInput (warningElem,warningDisplay,warningText,warningColor) {
  warningElem.style.display = warningDisplay;
  warningElem.innerHTML = warningText;
  warningElem.style.color = warningColor;
}
function modalDtails (visibility,text,src) {
  modalSection.style.visibility = visibility;
  modalText.innerHTML = text;
  modalImage.src = src;
}
function hideModal () {
  modalSection.style.visibility = "hidden";
}
function setInLocalStorage(userList) {
  window.localStorage.setItem("Users", JSON.stringify(userList));
}
function getInformations(loggedNameval, loggedPassVal) {
  let getData = JSON.parse(localStorage.getItem("Users"));

  if (getData === null) {
    usersAccounts = [];
  } else {
    let findedUser = getData.find(function (user) {
      return user.pass === loggedPassVal && user.name === loggedNameval;
    });
    if (findedUser) {
      console.log("Founded");
      window.location.href = "file:///C:/Users/daneshjo/Desktop/Shop/index.html";
    } else {
      modalDtails("visible","Fault in informations","images/login-images-icons/multiply.png");
      setTimeout(hideModal,3000);
    }
  }
}

