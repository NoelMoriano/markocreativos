const elementFormContactFx = document.querySelector("#form-contact-us-fixed");
const elementBtnSendEmailFx = document.querySelector("#btn-send-message-fixed");
const elementsRadioButtons = document.getElementsByName("radio-button-fixed");
const elementsFormFixed = document.querySelectorAll(
  ".contact-form-fixed__elements"
);

elementFormContactFx.addEventListener("submit", (e) =>
  validateFormContactFx(e)
);

const validateFormContactFx = async (e) => {
  try {
    e.preventDefault();

    activeSpinnerInButton(elementBtnSendEmailFx);

    const result = validateFormFields(
      [...elementsFormFixed],
      ["contact-form-fixed__company"]
    );

    if (!result) return false;

    const elementsFormFixedValues = [...elementsFormFixed].map(
      (element) => element.value
    );

    const formData = mapContactFx(elementsFormFixedValues);

    const response = await fetchSendEmail(formData);

    if (!response.ok) throw new Error(response.statusText);

    window.location.href = "../successful-message.html";
  } catch (e) {
    console.log("Error email send:", e);
    notification(
      "danger",
      "Lo sentimos, no se pudo enviar el mensaje, intentelo mas tarde."
    );
  } finally {
    activeSpinnerInButton(elementBtnSendEmailFx, false, "Enviar mensaje");
  }
};

const mapContactFx = (elementsFormFixedValues) => ({
  firstName: elementsFormFixedValues[0],
  lastName: elementsFormFixedValues[1],
  company: elementsFormFixedValues[2],
  email: elementsFormFixedValues[3],
  phone: {
  number: elementsFormFixedValues[4],
  countryCode: "+51"
  },
  service: elementsFormFixedValues[5],
  contactPreference: radioButtonsValue(elementsRadioButtons),
  hostname: "markocreativos"
});
