// !Select items
// Home Sec
const menuElBtn = document.getElementById("menu-btn");
const navEl = document.getElementById("nav");
const closeElBtn = document.getElementById("close-btn");
const navContainer = document.querySelector(".nav-container");
const pagesLinks = document.querySelector(".links .pages");
// Stats Sec
const statsNumsEls = document.querySelectorAll(".stats h3");
const statsEl = document.getElementById("stats");
let started = false;
// console.log(statsEl);

// Questions & Answers
const answers = document.querySelectorAll(".accordion-item");

// Copyright
const copyright = document.getElementById("cop-year");

// Fixed nav bar
window.onscroll = () => {
	if (this.scrollY > 10) {
		navContainer.classList.add("onscroll");
	} else {
		navContainer.classList.remove("onscroll");
	}
};

// Stats Sec
document.onscroll = () => {
	fillStats();
};

// !Addeventlisteners
menuElBtn.addEventListener("click", rightMenu);
closeElBtn.addEventListener("click", closeRihgtMenu);
pagesLinks.addEventListener("click", linksOfPages);

// !Functions
// Show and hide Right Menu
function rightMenu() {
	navEl.classList.add("nav-right");
	menuElBtn.style.display = "none";
	navContainer.classList.add("blur");
}
// Close Right Menu
function closeRihgtMenu() {
	navEl.classList.remove("nav-right");
	navContainer.classList.remove("blur");
	closeElBtn.style.display = "none";
}
// Pop Pages Links
function linksOfPages() {
	pagesLinks.classList.toggle("show-links");
}

// Stats Sec
function fillStats() {
	if (window.screenY >= statsEl.offsetTop) {
		if (!started) {
			statsNumsEls.forEach(num => startCount(num));
		}
		started = true;
	}
}

// Start Count
function startCount(el) {
	let goal = el.dataset.goal;
	let counter = setInterval(() => {
		for (let i = 0; i < goal / 500; i++) {
			el.textContent++;
			if (el.textContent === goal) {
				clearInterval(counter);
			}
		}
	}, 1 / goal);
}

// Questions & Answers
answers.forEach(answer => {
	const btn = answer.querySelector(".question-btn");
	answer.addEventListener("click", () => {
		showAnswer();
	});
	function showAnswer() {
		answers.forEach(item => {
			if (item !== answer) {
				item.classList.remove("show-answer");
			}
		});
		answer.classList.toggle("show-answer");
	}
});

// Characters Slick
$(".autoplay").slick({
	slidesToShow: 6,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 10000,
	arrows: false,
	infinite: true,
	pauseOnHover: true,
	useTransform: false,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
	],
});

// Roadmap Slick
$(".context-container").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4500,
	arrows: false,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
	],
});

// Copyright
const copryrightYear = new Date();
copyright.innerHTML = copryrightYear.getFullYear();
