/* //MAP ELEMENTS HTML
let formContainerContact = document.querySelector(
  "#container-form-contact-us-fixed"
);
let itemVisibleForm = document.querySelector(".item-open-form");
let itemIconCloseForm = document.querySelector(".item-icon-close-form");
let openFormMobile = document.querySelector(".item-open-form-mobile");
let formContact = document.querySelector(".needs-validation-form");
let iconFormContact = document.querySelector("#icon-form-contact");

let activeFormOpen;

let resultContactType_ = "";

//ADD EVENTS ITEMS
itemIconCloseForm.addEventListener("click", function () {
  activeFormOpen = false;
  setLocalStorage("activeFormContent", { isVisibleFormContact: false });
  isVisibleItem(formContainerContact, "none");
  isVisibleItem(itemVisibleForm, "flex");
  iconFormContact.className = "fa fa-sort-up";
});

//BTN CONTACT OPEN AND CLOSE
itemVisibleForm.addEventListener("click", function () {
  if (!activeFormOpen) {
    activeFormOpen = true;
    setLocalStorage("activeFormContent", { isVisibleFormContact: true });
    isVisibleItem(formContainerContact, "flex");
    isVisibleItem(itemVisibleForm, "none");
  } else {
    activeFormOpen = false;
    setLocalStorage("activeFormContent", { isVisibleFormContact: false });
    isVisibleItem(formContainerContact, "none");
    isVisibleItem(itemVisibleForm, "flex");
    iconFormContact.className = "fa fa-sort-up";
  }
});

//LOAD CONFIG
function onLoadFunction() {
  let activeFormContent_ = getLocalStorage("activeFormContent");

  activeFormContent_ == null &&
    setLocalStorage("activeFormContent", { isVisibleFormContact: true });

  if (!getLocalStorage("activeFormContent").isVisibleFormContact) {
    activeFormOpen = false;
    if (!activeFormOpen) {
      isVisibleItem(formContainerContact, "none");
      isVisibleItem(itemVisibleForm, "flex");
    }
  } else {
    activeFormOpen = true;
    if (activeFormOpen) {
      isVisibleItem(formContainerContact, "flex");
      isVisibleItem(itemVisibleForm, "none");
    }
  }
}

document.body.addEventListener("load", onLoadFunction());

formContainerContact.addEventListener("submit", (e) => validateForm(e));

//VALIDATE CONTENT FORM
const validateForm = async (e) => {
  e.preventDefault();

  let nameValue = document.querySelector("#input-name-fixed").value;
  let lastNameValue = document.querySelector("#input-lastName-fixed").value;
  let companyValue = document.querySelector("#input-company-fixed").value;
  let emailValue = document.querySelector("#input-email-fixed").value;
  let phoneValue = document.querySelector("#input-phone-fixed").value;
  let servicesValue = document.querySelector("#select-services-fixed").value;
  let contactType = document.getElementsByName("contact-type-fixed");

  let stateMessage = document.querySelector("#state-message");

  if (
    !nameValue ||
    !lastNameValue ||
    !emailValue ||
    !phoneValue ||
    !servicesValue
  ) {
    isVisibleItem(stateMessage, "inherit");
    stateMessage.innerHTML = "*Ups te falto llenar el formulario";
    stateMessage.style.color = "red";
    setLocalStorage("activeAlert", { isVisibleAlert: false });

    return false;
  } else {
    //GET DATA RADIO GROUP
    getDataTypeContact(contactType);

    let userDataSt = {
      userName: nameValue.toLowerCase(),
      userLastName: lastNameValue.toLowerCase(),
      userCompany: companyValue.toLowerCase(),
      userEmail: emailValue.toLowerCase(),
      userPhone: phoneValue.toLowerCase(),
      userService: servicesValue.toLowerCase(),
      userContactType: (resultContactType_
        ? resultContactType_
        : "cualquiera"
      ).toLowerCase(),
    };

    activeFormOpen = false;
    setLocalStorage("activeFormContent", { isVisibleFormContact: false });
    isVisibleItem(formContainerContact, "none");
    //SET DATA
    setLocalStorage("userData", userDataSt);
    setLocalStorage("activeAlert", { isVisibleAlert: true });
    isVisibleItem(stateMessage, "none");

    const mapContact = {
      firstName: userDataSt.userName,
      lastName: userDataSt.userLastName,
      company: userDataSt.userCompany,
      email: userDataSt.userEmail,
      phone: userDataSt.userPhone,
      service: userDataSt.userService,
      contactPreference: userDataSt.userContactType,
    };

    const result = await fetchSendEmail(mapContact);

    if (!result.ok) {
      isVisibleItem(formContainerContact, "none");
      isVisibleItem(itemVisibleForm, "flex");
      return false;
    }

    const refMessage = `https://api.whatsapp.com/send?phone=+51987523496&text=*_MENSAJE DE COTIZACIÓN DESDE WEB MARKOCREATIVO_*%0A%0A*Nombres:*%0A${nameValue}%0A%0A*Apellidos:*%0A${lastNameValue}%0A%0A*Empresa:*%0A${companyValue}%0A%0A*Email:*%0A${emailValue}%0A%0A*Cell:*%0A${phoneValue}%0A%0A*Servicio:*%0A${servicesValue}%0A%0A*Tipo de contácto:*%0A${
      resultContactType_ ? resultContactType_ : "undefined"
    }`;

    window.location.href = "../successful-message.html";

    window.open(refMessage);

    nameValue = "";
    lastNameValue = "";
    companyValue = "";
    emailValue = "";
    phoneValue = "";
    servicesValue = "";
    contactType = "";
    resultContactType_ = "";

    return true;
  }
};

//LISTENER STATE LOCAL STORAGE******************************************>>>
if (getLocalStorage("activeFormContent").isVisibleFormContact) {
  isVisibleItem(formContainerContact, "flex");
} else {
  isVisibleItem(formContainerContact, "none");
}
//<<<********************************************************************End

//GET DATA RADIO BUTTONS
function getDataTypeContact(contactType) {
  contactType.forEach((contact) => {
    if (contact.checked) {
      resultContactType_ = contact.value;
      return resultContactType_;
    }
  });
}
 */
