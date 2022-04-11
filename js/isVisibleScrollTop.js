const elementScrollTop = document.querySelector("#item-scroll-top");

// onchange scroll height
window.addEventListener("scroll", () => {
  const bodyClientHeight = document.body.offsetHeight;

  const scrollTop = window.scrollY;

  if (scrollTop >= bodyClientHeight - 3000) {
    addClassNames(["is_visible"], elementScrollTop);
    removeClassNames(["none"], elementScrollTop);
    onScrollTop();
  } else {
    addClassNames(["none"], elementScrollTop);
    removeClassNames(["is_visible"], elementScrollTop);
  }
});

const onScrollTop = () =>
  elementScrollTop.addEventListener("click", () => scrollBtnTop());

//Scroll btn top
const scrollBtnTop = () => scroll(0, 0);
