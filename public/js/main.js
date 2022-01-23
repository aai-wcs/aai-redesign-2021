/*! AAI-WCS Web Redesign v0.0.1 | (c) 2022 Edward Margallo | MIT License | https://github.com/aai-wcs/aai-redesign-2021 */
document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);