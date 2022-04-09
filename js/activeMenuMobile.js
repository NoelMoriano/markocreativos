let MenuMobile = document.querySelector(".container-menu-mobile");

let visibleMenuMobile = document.querySelector(".icon-menu-open-mb");
let notVisibleMenuMobile = document.querySelector(".icon-menu-close-mb");

let itemsDisableMenuMobile = document.querySelectorAll(".active-item-mobile");

visibleMenuMobile.addEventListener("click", () => activeMenuMobile());
notVisibleMenuMobile.addEventListener("click", () => desactiveMenuMobile());

const activeMenuMobile = () => {
  MenuMobile.style.display = "inherit";
};

const addedEventItems = () => {
  for (let i = 0; i <= itemsDisableMenuMobile.length; i++) {
    itemsDisableMenuMobile[i] &&
      itemsDisableMenuMobile[i].addEventListener("click", desactiveMenuMobile);
  }
};

const desactiveMenuMobile = () => {
  MenuMobile.style.display = "none";
};

addedEventItems();
