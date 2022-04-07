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

const addClassName = (className, element) => element.classList.add(className); //add className

const removeClassName = (className, element) =>
  element.classList.remove(className); //remove className

const isVisibleItem = (item, value) => (item.style.display = value); //is visible item
