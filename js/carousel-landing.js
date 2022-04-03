var slide = 0,
	slides = document.querySelectorAll("#slides > li"),
	numSlides = slides.length,
	//Functions!!
	currentSlide = function () {
		var itemToShow = Math.abs(slide % numSlides);
		[].forEach.call(slides, function (el) {
			el.classList.remove("slideActive");
		});
		slides[itemToShow].classList.add("slideActive");
		resetInterval();
	},
	next = function () {
		slide++;
		currentSlide();
	},
	prev = function () {
		slide--;
		currentSlide();
	},
	/*resetProgress = function() {
      var elm = document.querySelector('.progressbar'),
          newone = elm.cloneNode(true),
          x = elm.parentNode.replaceChild(newone, elm);
    },*/

	resetslide = function () {
		var elm = document.querySelector("#slides > li"),
			newone = elm.cloneNode(true),
			x = elm.parentNode.replaceChild(newone, elm);
	},
	resetInterval = function () {
		clearInterval(autonext);
		autonext = setInterval(function () {
			slide++;
			currentSlide();
		}, 4000);
	},
	autonext = setInterval(function () {
		next();
	}, 4000);

//Buttons
document.querySelector("#first").addEventListener(
	"click",
	function () {
		slide = 0;
		currentSlide();
	},
	false
);
document.querySelector("#second").addEventListener(
	"click",
	function () {
		slide = 1;
		currentSlide();
	},
	false
);
document.querySelector("#third").addEventListener(
	"click",
	function () {
		slide = 2;
		currentSlide();
	},
	false
);
document.querySelector("#next").addEventListener(
	"click",
	function () {
		next();
	},
	false
);
document.querySelector("#previous").addEventListener(
	"click",
	function () {
		prev();
	},
	false
);
