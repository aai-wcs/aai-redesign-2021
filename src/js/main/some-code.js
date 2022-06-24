document.addEventListener('click', function (event) {
	if (!event.target.matches('#platform-discover')) return;
	alert('You clicked me!');

	// check this.href contains #
	// if true = var targetDiv
	// scroll to targetDiv
}, false);

// TO DO
// Vanilla JS - css style switcher, light mode vs dark mode