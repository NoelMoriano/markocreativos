const elementFormContactFooter = document.querySelector(
  "#form-contact-us-footer"
);
const elementsInputs = document.querySelectorAll(".contact-form__input");

elementFormContactFooter.addEventListener("submit", (e) =>
  validateFormContact(e)
);

const validateFormContact = async (e) => {
  try {
    e.preventDefault();

    const formFields = [...elementsInputs].filter(
      (element) => element.localName !== "textarea"
    );

    const result = validateFormFields(formFields);

    if (!result) return false;

    const elementsValues = [...elementsInputs].map((element) => element.value);

    const formData = mapContact(elementsValues);

    const response = await fetchSendEmail(formData);

    if (!response.ok) throw new Error(response.statusText);

    window.location.href = "../successful-message.html";
  } catch (e) {
    console.log("Error email send:", e);
  }
};

const mapContact = (elementsValues) => ({
  firstName: elementsValues[0],
  lastName: elementsValues[1],
  phone: elementsValues[2],
  email: elementsValues[3],
  message: elementsValues[4] || null,
});
