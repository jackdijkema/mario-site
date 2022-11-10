var audio = new Audio("music.mp3");
let isPlaying = false;
const updatePerSecond = 1;
window.onload = function main() {
	scrollDown();
	showSlides();
	setInterval(releaseDateTimer, updatePerSecond * 1000)
};

window.onscroll = function () { 
	displayScrollButton();
};


function releaseDateTimer() {
	const release_date = new Date("April 4, 1983").getTime();
	let current_date = new Date().getTime();
	let timeleft = current_date - release_date;

	let years = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 365));
	let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

	let days_ago = days - (years * 365);

	document.getElementById("days").innerHTML = years + " years and " + days_ago + " days ago";
}

function play() {
	if (isPlaying != 1) {
		audio.play();
		isPlaying = true;
	} else {
		audio.pause();
		isPlaying = false;
	}
}

function scrollDown() {
	return window.scroll(
		0, 
		document.documentElement.scrollTop = 
		document.documentElement.scrollHeight);
}

let slideIndex = 1;

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slide");

	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

function nextSlide(n) {
	showSlides(slideIndex += n)
}

function displayScrollButton() {
	var scrollButton = document.getElementById("bottomButton");
	if (document.body.scrollTop < 20|| document.documentElement.scrollTop < 20) {
		scrollButton.style.display = "block";
	} else {
		scrollButton.style.display = "none";
	}
}

function scrollBottom() {
	document.body.scrollTop = document.body.scrollHeight;
	document.documentElement.scrollTop = document.documentElement.scrollHeight;
}