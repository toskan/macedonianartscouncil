const windowEventListeners = [
	'DOMContentLoaded',
	'orientationchange',
	'onresize',
];

const equalHeightDivs = (larger, smaller) => {
	smaller.style.height = `${larger.offsetHeight}px`;
};

const equalHeightDivsCarousel = (largest, allItems) => {
	allItems.forEach(
		(item) => (item.style.height = `${largest.offsetHeight}px`)
	);
};

windowEventListeners.forEach((item) =>
	window.addEventListener(item, (event) => {
		if (document.getElementById('video-title-larger')) {
			equalHeightDivs(
				document.getElementById('video-title-larger'),
				document.getElementById('video-title-smaller')
			);
		}
		if (document.getElementById('carousel-partings-largest')) {
			equalHeightDivsCarousel(
				document.getElementById('carousel-partings-largest'),
				document.querySelectorAll('.carousel-item-partings')
			);
		}
		if (document.getElementById('carousel-affiliations-largest')) {
			equalHeightDivsCarousel(
				document.getElementById('carousel-affiliations-largest'),
				document.querySelectorAll('.carousel-item-affiliations')
			);
		}
	})
);
