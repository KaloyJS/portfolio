$(document).ready(function() {
	//superslides initialization
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	//Typed settings
	var typed = new Typed(".typed", {
		strings: ["Web Developer." , "coder.", "seeker.", ],
		typeSpeed: 140,
		loop: true,
		startDelay: 1000
	});

	//Owl carousel settings
	$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	        	items:4
	        }
	    }
	});

	


      var skillsTopOffset = $(".skillsSection").offset().top;


      $(window).scroll(function() {

      		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      				//easy pie chart settings
				    $('.chart').easyPieChart({
			            easing: 'easeInOut',
			            barColor: '#fff',
			            trackColor: false,
			            scaleColor: false,
			            lineWidth:  4,
			            size: 152,
			            onStep: function(from, to, percent) {
			            	$(this.el).find('.percent').text(Math.round(percent));
			            }
			        });
      		}
      });
});