let MenuMobile = document.querySelector(".container-menu-mobile");

let visibleMenuMobile = document.querySelector(".icon-menu-open-mb");
let notVisibleMenuMobile = document.querySelector(".icon-menu-close-mb");

let itemsDisableMenuMobile = document.querySelectorAll(".active-item-mobile");

visibleMenuMobile.addEventListener("click", () => activeMenuMobile());
notVisibleMenuMobile.addEventListener("click", () => desactiveMenuMobile());

const activeMenuMobile = () => {
  addClassNames(["menu-mobile-open"], MenuMobile);
  removeClassNames(["menu-mobile-close", "none"], MenuMobile);
};

const addedEventItems = () => {
  for (let i = 0; i <= itemsDisableMenuMobile.length; i++) {
    itemsDisableMenuMobile[i] &&
      itemsDisableMenuMobile[i].addEventListener("click", () =>
        desactiveMenuMobile()
      );
  }
};

const desactiveMenuMobile = () => {
  addClassNames(["menu-mobile-close"], MenuMobile);
  removeClassNames(["menu-mobile-open", "visible"], MenuMobile);
};

addedEventItems();
