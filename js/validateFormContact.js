let formContactFooter = document.querySelector("#form-contact-us-footer");
let btnSendMessage = document.querySelector("#btn-send-message");
let warningMessage = document.querySelector("#warning-message");

let inputNameAndLastname = document.querySelector("#input-name-and-lastname");
let inputPhone = document.querySelector("#input-phone");
let inputEmail = document.querySelector("#input-email");
let textAreaDescription = document.querySelector("#text-area-description");

inputNameAndLastname.addEventListener("input", () => {
  getDataItems(
    inputNameAndLastname,
    inputNameAndLastname.value,
    "nameAndLastname"
  );
});
inputPhone.addEventListener("input", () => {
  getDataItems(inputPhone, inputPhone.value, "phone");
});
inputEmail.addEventListener("input", () => {
  getDataItems(inputEmail, inputEmail.value, "email");
});
textAreaDescription.addEventListener("input", () => {
  getDataItems(textAreaDescription, textAreaDescription.value, "message");
});

formContactFooter.addEventListener("submit", (e) => validateFormContact(e));

const validateFormContact = async (e) => {
  e.preventDefault();

  if (
    !validateEmailFormat("email", inputEmail.value) ||
    !sessionStorage.getItem("nameAndLastname") ||
    !sessionStorage.getItem("phone") ||
    !sessionStorage.getItem("email")
  ) {
    return false;
  } else {
    const nameAndLastname_ = sessionStorage.getItem("nameAndLastname");
    const phone_ = sessionStorage.getItem("phone");
    const email_ = sessionStorage.getItem("email");
    const message_ = sessionStorage.getItem("message");

    const mapContact = {
      firstName: nameAndLastname_.split(" ")[0],
      lastName: nameAndLastname_.split(" ")[1],
      email: email_,
      phone: phone_,
      message: message_,
    };

    const result = await fetchSendEmail(mapContact);

    if (!result.ok) return false;

    const refMessage = `https://api.whatsapp.com/send?phone=+51987523496&text=*_MENSAJE DE CONSULTA DESDE WEB MARKOCREATIVO_*%0A%0A*Nombres y apellidos:*%0A${nameAndLastname_}%0A%0A*Cell:*%0A${phone_}%0A%0A*Email:*%0A${email_}%0A%0A*Mensaje:*%0A${message_}`;
    window.open(refMessage);

    window.location.href = "../successful-message.html";

    sessionStorage.clear();

    return true;
  }
};

function getDataItems(item, value, key) {
  if (value.length <= 1) {
    sessionStorage.setItem(key, value);
    return addClassNew(item, "warning-border");
  } else {
    addClassNew(item, "-");
    setSessionStorage(key, value);
    validateEmailFormat(key, value);
  }
}

function setClassNameAll(value) {
  inputNameAndLastname.className = value;
  inputPhone.className = value;
  inputEmail.className = value;
  textAreaDescription.className = value;
}

function defaultValueItems() {
  const nameAndLastname_ = sessionStorage.getItem("nameAndLastname");
  const phone_ = sessionStorage.getItem("phone");
  const email_ = sessionStorage.getItem("email");
  const message_ = sessionStorage.getItem("message");

  if (nameAndLastname_) {
    inputNameAndLastname.value = nameAndLastname_;
  }
  if (phone_) {
    inputPhone.value = phone_;
  }
  if (email_) {
    inputEmail.value = email_;
  }
  if (message_) {
    textAreaDescription.value = message_;
  }
}

function validateEmailFormat(key, valueEmail) {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (key === "email") {
    let result = regexEmail.test(String(valueEmail).toLowerCase());
    if (result) {
      warningMessage.style.display = "none";
      return result;
    } else {
      warningMessage.style.display = "inherit";
      return result;
    }
  }
}

defaultValueItems();
