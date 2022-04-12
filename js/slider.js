const slider = document.querySelector("#slider");
let slidersSection = document.querySelectorAll(".section__slider");
let sliderSectionLast = slidersSection[slidersSection.length - 1];

const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-previous");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

const onNextClick = () => {
  const sliderSectionFirst = document.querySelectorAll(".section__slider")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
};

const onPreviosClick = () => {
  let slidersSection = document.querySelectorAll(".section__slider");
  let sliderSectionLast = slidersSection[slidersSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
};

btnNext.addEventListener("click", () => {
  onNextClick();
});
btnPrev.addEventListener("click", () => {
  onPreviosClick();
});

const clearSetInterval = setInterval(() => {
  onNextClick();
}, 3000);
