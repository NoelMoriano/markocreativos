const elementFormContactFooter = document.querySelector(
  "#form-contact-us-footer"
);
const elementsFormFooter = document.querySelectorAll(".contact-form__input");

elementFormContactFooter.addEventListener("submit", (e) =>
  validateFormContact(e)
);

const validateFormContact = async (e) => {
  try {
    e.preventDefault();

    const result = validateFormFields([...elementsFormFooter], ["message-fo"]);

    if (!result) return false;

    const elementsFormFooterValues = [...elementsFormFooter].map(
      (element) => element.value
    );

    const formData = mapContact(elementsFormFooterValues);

    const response = await fetchSendEmail(formData);

    if (!response.ok) throw new Error(response.statusText);

    window.location.href = "../successful-message.html";
  } catch (e) {
    console.log("Error email send:", e);
  }
};

const mapContact = (elementsFormFooterValues) => ({
  firstName: elementsFormFooterValues[0],
  lastName: elementsFormFooterValues[1],
  phone: elementsFormFooterValues[2],
  email: elementsFormFooterValues[3],
  message: elementsFormFooterValues[4] || null,
});
