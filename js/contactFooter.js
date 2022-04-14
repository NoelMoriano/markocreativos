const elementFormContactFooter = document.querySelector(
  "#form-contact-us-footer"
);
const elementBtnSendEmailFo = document.querySelector("#btn-send-message-fo");
const elementsFormFooter = document.querySelectorAll(".contact-form__input");

elementFormContactFooter.addEventListener("submit", (e) =>
  validateFormContact(e)
);

const validateFormContact = async (e) => {
  try {
    e.preventDefault();

    activeSpinnerInButton(elementBtnSendEmailFo);

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
    notification(
      "danger",
      "Lo sentimos, no se pudo enviar el mensaje, intentelo mas tarde."
    );
  } finally {
    activeSpinnerInButton(elementBtnSendEmailFo, false, "Enviar mensaje");
  }
};

const mapContact = (elementsFormFooterValues) => ({
  firstName: elementsFormFooterValues[0],
  lastName: elementsFormFooterValues[1],
  phone: elementsFormFooterValues[2],
  email: elementsFormFooterValues[3],
  message: elementsFormFooterValues[4] || null,
});
