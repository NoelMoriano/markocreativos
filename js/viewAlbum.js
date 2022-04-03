/***********VIEW IMAGES PORTAFOLIO*********/
const pathImgBriefcase = "../images/briefcase/";
let countImage = 0;
let newImages = [];

let temporizador;

const containerModalViewGallery = document.querySelector("#container-modal-view-gallery");
const imgGalleryBriefcase = document.querySelector("#img-gallery-briefcase");

document
	.querySelector("#close-container-modal-view-gallery")
	.addEventListener("click", () => {
		clearInterval(temporizador);
		newImages = [];
		countImage = 0;
		imgGalleryBriefcase.src = "../images/otros/image-spinner-loader-yellow.gif";
		containerModalViewGallery.style.display = "none";
	});

document.querySelector("#prev-gallery-briefcase").addEventListener("click", changeImage);

document.querySelector("#next-gallery-briefcase").addEventListener("click", changeImage);

imgGalleryBriefcase.addEventListener("mouseover", stopTemporizador);

imgGalleryBriefcase.addEventListener("mouseout", startTemporizador);

const viewAlbumImg = (categoryId) => {
	if (!categoryId || categoryId == null) return [];

	const images = briefcaseImages.filter((images) => images.id === categoryId);
	const imagesSeconds = images[0].imagesSecondary;
	newImages = imagesSeconds;

	containerModalViewGallery.style.display = "inherit";
	temporizador = setInterval(changeImage, 3000);
};

function changeImage() {
	buttonType = this.id;

	if (buttonType != undefined) {
		clearInterval(temporizador);
		temporizador = setInterval(changeImage, 3000);
	}

	if (buttonType == "prev-gallery-briefcase") {
		countImage--;
		if (countImage < 0) {
			countImage = newImages.length - 1;
		}
	} else {
		countImage++;
		if (countImage == newImages.length) {
			countImage = 0;
		}
	}

	if (newImages.length >= 1) {
		imgGalleryBriefcase.src = pathImgBriefcase + newImages[countImage].url.trim();
	}
	console.log("countImage->", countImage);
}

function stopTemporizador() {
	clearInterval(temporizador);
}

function startTemporizador() {
	temporizador = setInterval(changeImage, 3000);
	console.log("countImage->", countImage);
}

/*****************************EFECTO ONMOUSE*****************************/
let setImg5 = document.querySelector("#setImg-5");
let setImg13 = document.querySelector("#setImg-13");
let setImg21 = document.querySelector("#setImg-21");

let onMouseEfect5 = document.querySelector("#onMouseEfect-5");
let onMouseEfect13 = document.querySelector("#onMouseEfect-13");
let onMouseEfect21 = document.querySelector("#onMouseEfect-21");

const filterDataImg = (idImg) => {
	switch (idImg) {
		case "setImg-5":
			return briefcaseImages[4];
		case "setImg-13":
			return briefcaseImages[12];
		case "setImg-21":
			return briefcaseImages[20];
	}
};

const onMouseImgOver = (img) => {
	const dataImg = filterDataImg(img.id);
	setTimeout(() => {
		img.src = pathImgBriefcase + dataImg.urlSecond.trim();
	}, 300);
};

const onMouseImgOut = (img) => {
	const dataImg = filterDataImg(img.id);
	setTimeout(() => {
		img.src = pathImgBriefcase + dataImg.urlPrimary.trim();
	}, 300);
};

onMouseEfect5.addEventListener("mouseover", () => onMouseImgOver(setImg5));
onMouseEfect5.addEventListener("mouseout", () => onMouseImgOut(setImg5));

onMouseEfect13.addEventListener("mouseover", () => onMouseImgOver(setImg13));
onMouseEfect13.addEventListener("mouseout", () => onMouseImgOut(setImg13));

onMouseEfect21.addEventListener("mouseover", () => onMouseImgOver(setImg21));
onMouseEfect21.addEventListener("mouseout", () => onMouseImgOut(setImg21));
