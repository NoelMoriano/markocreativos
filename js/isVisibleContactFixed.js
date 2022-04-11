const elmentItemVisibleForm = document.querySelector("#item-open-form");
const elementItemIconCloseForm = document.querySelector(
  "#item-icon-close-form"
);
const elementContainerformContactFx = document.querySelector(
  "#container-form-contact-us-fixed"
);

// is visible form contact
const isVisibleFormContactFx = (isVisibleForm = false) => {
  if (isVisibleForm) {
    addClassNames(["is_visible"], elementContainerformContactFx);
    removeClassNames(["none"], elementContainerformContactFx);
    addClassNames(["none"], elmentItemVisibleForm);
  } else {
    removeClassNames(["is_visible"], elementContainerformContactFx);
    addClassNames(["none"], elementContainerformContactFx);
    removeClassNames(["none"], elmentItemVisibleForm);
  }
};

// initial form contact
isVisibleFormContactFx();

// events onClicks
elmentItemVisibleForm.addEventListener("click", () => {
  isVisibleFormContactFx(true);
});

elementItemIconCloseForm.addEventListener("click", () => {
  isVisibleFormContactFx(false);
});
