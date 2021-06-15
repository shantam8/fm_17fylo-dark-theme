let inputField = document.querySelector("#inputEmail");
let regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

function submitMail() {
  let mail = inputField.value;
  console.log(mail);

  if (mail.match(regex)) {
    inputField.parentElement.classList.remove("error");
    console.log("submit data");
  } else {
    inputField.parentElement.classList.add("error");
    console.log("nope");
  }
}

function init() {
  document
    .querySelector("#btnSubmitMail")
    .addEventListener("click", submitMail);
}

window.onload = init();
