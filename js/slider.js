const elementSliderContainer = document.querySelector("#container-slider");
const elementSlider = document.querySelector("#slider");
let slidersSection = document.querySelectorAll(".section__slider");
let sliderSectionLast = slidersSection[slidersSection.length - 1];

const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-previous");

elementSlider.insertAdjacentElement("afterbegin", sliderSectionLast);

const onNextClick = (isActive = true) => {
  if (isActive) {
    const sliderSectionFirst = document.querySelectorAll(".section__slider")[0];
    elementSlider.style.marginLeft = "-200%";
    elementSlider.style.transition = "all 0.5s";

    setTimeout(() => {
      elementSlider.style.transition = "none";
      elementSlider.insertAdjacentElement("beforeend", sliderSectionFirst);
      elementSlider.style.marginLeft = "-100%";
    }, 500);
  }
};

const onPreviosClick = (isActive = true) => {
  if (isActive) {
    let slidersSection = document.querySelectorAll(".section__slider");
    let sliderSectionLast = slidersSection[slidersSection.length - 1];
    elementSlider.style.marginLeft = "0";
    elementSlider.style.transition = "all 0.5s";

    setTimeout(() => {
      elementSlider.style.transition = "none";
      elementSlider.insertAdjacentElement("afterbegin", sliderSectionLast);
      elementSlider.style.marginLeft = "-100%";
    }, 500);
  }
};

const setIntervalSlider = () =>
  setInterval(() => {
    onNextClick();
  }, 3000);

let clearSetInterval = null;

clearSetInterval = setIntervalSlider();

elementSliderContainer.addEventListener("mouseenter", () =>
  clearInterval(clearSetInterval)
);

elementSliderContainer.addEventListener("mouseout", () => {
  if (clearSetInterval) clearInterval(clearSetInterval);
  clearSetInterval = setIntervalSlider();
});

btnNext.addEventListener("click", () => {
  onNextClick();
  if (clearSetInterval) clearInterval(clearSetInterval);
});
btnPrev.addEventListener("click", () => {
  onPreviosClick();
  if (clearSetInterval) clearInterval(clearSetInterval);
});
