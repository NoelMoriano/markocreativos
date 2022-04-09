/*ONLOAD PAGE
window.onload = (event) => {
	scroll(0, 0);
};*/

const imgGirlTitleJobsUsAn003 = document.getElementsByClassName(
  "img-girl-title-jobs-us-an003"
);
new simpleParallax(imgGirlTitleJobsUsAn003, {
  overflow: true,
  orientation: "up",
  delay: 1.9,
  scale: 1.2,
  transition: "cubic-bezier(0,0,0,1)",
});

const imgTextTitleJobUs = document.getElementsByClassName(
  "img-text-title-job-us-ittju1"
);
new simpleParallax(imgTextTitleJobUs, {
  overflow: true,
  orientation: "right",
  delay: 1.9,
  scale: 1.5,
  transition: "cubic-bezier(0,0,0,1)",
});

//Scroll btn top
const scrollBtnTop = () => scroll(0, 0);
