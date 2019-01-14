$(document).ready(function() {
	//superslides initialization
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Web Developer." , "coder.", "seeker.", ],
		typeSpeed: 140,
		loop: true,
		startDelay: 1000
	});
});