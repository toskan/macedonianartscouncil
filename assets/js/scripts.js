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

		if (
			document.getElementById('map-p') &&
			window.matchMedia('(min-width: 992px)').matches
		) {
			equalHeightDivs(
				document.getElementById('map-p'),
				document.getElementById('map-poster')
			);
		}

		if (document.getElementById('burger-lines')) {
			document.getElementById('burger-lines').onclick = function () {
				document
					.getElementById('mac-logo')
					.classList.toggle('mac-logo-div');
				document
					.getElementById('menu2-2v')
					.classList.toggle('nav-section-pad');
			};
		}

		if (
			document.getElementById('map-title') &&
			window.matchMedia('(max-width: 991.98px)').matches
		) {
			document
				.getElementById('map-p-div')
				.classList.add('map-p-toggle-off');
		}

		const toggleMap = () => {
			document
				.getElementById('map-p-div')
				.classList.toggle('map-p-toggle-on');
			document
				.getElementById('map-p-div')
				.classList.toggle('map-p-toggle-off');
			document
				.getElementById('info-div-map')
				.classList.toggle('info-div-map-toggle-off');
			document
				.getElementById('map-poster')
				.classList.toggle('map-poster-toggle-off');
		};

		document.getElementById('info-button-map').onclick = toggleMap;
		document.getElementById('close-button-map').onclick = toggleMap;
	})
);
