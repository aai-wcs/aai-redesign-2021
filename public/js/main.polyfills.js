/*! AAI-WCS Web Redesign v0.0.1 | (c) 2023 Edward Margallo | MIT License | https://github.com/aai-wcs/aai-redesign-2021 */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
document.addEventListener('click', (function (event) {
	// if (!event.target.matches('#platform-discover')) return;
	// alert('You clicked me!');

	// check this.href contains #
	// if true = var targetDiv
	// scroll to targetDiv
	var anchor = document.querySelector('#anchor');
anchor.scrollIntoView();

}), false);

// TO DO
// Vanilla JS - css style switcher, light mode vs dark mode