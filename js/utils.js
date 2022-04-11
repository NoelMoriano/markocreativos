const methodTypes = {
  GET: {
    method: "GET",
  },
  POST: {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Accept: "application/json",
    },
  },
};

// FETCHS //
const fetchApi = async (url, method = "GET", data = {}) => {
  const result = await fetch(url, {
    ...methodTypes[method],
    ...(method === "POST" && { body: JSON.stringify(data) }),
  });

  return result;
}; //fetch api

const fetchApiUrls = async () => {
  const result = await fetchApi("./es/estilos.json", "GET");
  return await result.json(); // fetch api urls
};

const fetchSendEmail = async (contact) => {
  const urls = await fetchApiUrls();

  const result = await fetchApi(`${urls.sendingEmailsApi}/contact`, "POST", {
    contact: contact,
  });

  return result;
};

// SESSION AND LOCAL STORAGE //

const setSessionStorage = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value)); // set session storage

const getSessionStorage = (key) => JSON.parse(sessionStorage.getItem(key)); //get session storage

const clearSessionStorage = (key) => sessionStorage.removeItem(key); // clear session storage

const clearAllSessionStorage = () => sessionStorage.clear(); // clear all session storage

const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value)); //set local storage

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)); //get local storage

const clearLocalStorage = (key) => localStorage.removeItem(key); // clear local storage

const clearAllLocalStorage = () => localStorage.clear(); //clear all local storage

// SESSION AND LOCAL STORAGE //

const addClassNames = (classNames = [], element) =>
  classNames.forEach((className) => element.classList.add(className)); //add classNames

const removeClassNames = (classNames = [], element) =>
  classNames.forEach((className) => element.classList.remove(className)); //remove classNames

const isVisibleItem = (item, value) => (item.style.display = value); //is visible item

const validateEmailFormat = (valueEmail) => {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexEmail.test(String(valueEmail).toLowerCase());
}; //validate format email

const validateFormFields = (formFields, fieldsNoRequired = []) => {
  let isValid = [];

  const emailField = formFields.find((element) => element.type === "email");

  const isValidEmail = validateEmailFormat(emailField.value.trim());

  !isValidEmail
    ? addClassNames(["not-invalid", "shake"], emailField)
    : removeClassNames(["not-invalid", "shake"], emailField);

  isValid.push(isValidEmail);

  formFields
    .filter(
      (field) => field.type !== "email" && !fieldsNoRequired.includes(field.id)
    )
    .forEach((item) => {
      !item.value.trim()
        ? addClassNames(["not-invalid", "shake"], item)
        : removeClassNames(["not-invalid", "shake"], item);

      isValid.push(!!item.value);
    });

  return isValid.includes(false) ? false : true;
}; //validate form fields

// RADIO BUTTON
const radioButtonsValue = (radioButtons) =>
  [...radioButtons].find((radioButton) =>
    radioButton.checked ? radioButton.value : null
  ).value;
