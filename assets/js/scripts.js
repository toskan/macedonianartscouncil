window.addEventListener('DOMContentLoaded', (event) => {
	let largerVideoTitleHeight =
		document.getElementById('video-title-larger').offsetHeight;
	document.getElementById(
		'video-title-smaller'
	).style.height = `${largerVideoTitleHeight}px`;
});
