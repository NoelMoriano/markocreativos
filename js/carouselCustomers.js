const elementCarouselContainer = document.querySelector("#container-carousel");
const elementCarousel = document.querySelector("#carousel-customers");
let carouselSection = document.querySelectorAll(".section__carousel");
let carouselSectionLast = carouselSection[carouselSection.length - 1];

const btnNextCarousel = document.querySelector("#btn-next-carousel");
const btnPrevCarousel = document.querySelector("#btn-previous-carousel");

const isDesktop = document.body.clientWidth;

elementCarousel.insertAdjacentElement("afterbegin", carouselSectionLast);

const onNextClickCarousel = (isActive = true) => {
  if (isActive) {
    const carouselSectionFirst =
      document.querySelectorAll(".section__carousel")[0];
    elementCarousel.style.marginLeft = "-70%";
    elementCarousel.style.transition = "all 0.5s";

    setTimeout(() => {
      elementCarousel.style.transition = "none";
      elementCarousel.insertAdjacentElement("beforeend", carouselSectionFirst);
      elementCarousel.style.marginLeft = "-35%";
    }, 500);
  }
};

const onPreviosClickCarousel = (isActive = true) => {
  if (isActive) {
    let carouselSection = document.querySelectorAll(".section__carousel");
    let carouselSectionLast = carouselSection[carouselSection.length - 1];
    elementCarousel.style.marginLeft = "0";
    elementCarousel.style.transition = "all 0.5s";

    setTimeout(() => {
      elementCarousel.style.transition = "none";
      elementCarousel.insertAdjacentElement("afterbegin", carouselSectionLast);
      elementCarousel.style.marginLeft = "-35%";
    }, 500);
  }
};

const setIntervalCarousel = () =>
  setInterval(() => {
    onNextClickCarousel();
  }, 2000);

let clearSetIntervalCarousel = null;

clearSetIntervalCarousel = setIntervalCarousel();

if (document.body.clientWidth >= 879) {
  clearInterval(clearSetIntervalCarousel);
}

elementCarouselContainer.addEventListener("mouseenter", () =>
  clearInterval(clearSetIntervalCarousel)
);

elementCarouselContainer.addEventListener("mouseout", () => {
  if (clearSetIntervalCarousel) clearInterval(clearSetIntervalCarousel);
  clearSetIntervalCarousel = setIntervalCarousel();
});

btnNextCarousel.addEventListener("click", () => {
  onNextClickCarousel();
  if (clearSetIntervalCarousel) clearInterval(clearSetIntervalCarousel);
});
btnPrevCarousel.addEventListener("click", () => {
  onPreviosClickCarousel();
  if (clearSetIntervalCarousel) clearInterval(clearSetIntervalCarousel);
});
