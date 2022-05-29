const equalHeightDivs = (larger, smaller) => {
	smaller.style.height = `${larger.offsetHeight}px`;
};

window.addEventListener('DOMContentLoaded', (event) => {
	equalHeightDivs(
		document.getElementById('video-title-larger'),
		document.getElementById('video-title-smaller')
	);
});
