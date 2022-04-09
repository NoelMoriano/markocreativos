let elementBtnGoBack = document.querySelector("#btn-go-back");

const onGoBackClick = () => {
  window.location.href = "../index.html";
};

elementBtnGoBack.addEventListener("click", () => onGoBackClick());

setTimeout(() => onGoBackClick(), 5000);
