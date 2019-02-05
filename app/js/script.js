$(document).ready(function() {
	//superslides initialization
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	$(".items").isotope({
      		filter: '*',
      		animationOptions: {
      			duration: 1500,
      			easing: 'linear',
      			queue: false
      		}
      });

	//Typed settings
	var typed = new Typed(".typed", {
		strings: ["Web Developer." , "coder.", "seeker.", "spiritual being", "all in all good guy!" ],
		typeSpeed: 140,
		loop: true,
		startDelay: 1000
	});

	var typed2 = new Typed(".nodejs", {
	  // Waits 1000ms after typing "First"
	  strings: ["Node Js"],
	  typeSpeed: 140,
	  loop: false,
	  startDelay: 1000
	});

	var typed2 = new Typed(".react", {
	  // Waits 1000ms after typing "First"
	  strings: ["react"],
	  typeSpeed: 140,
	  loop: false,
	  startDelay: 1000
	});

	var typed2 = new Typed(".javascript", {
	  // Waits 1000ms after typing "First"
	  strings: ["JavaScript"],
	  typeSpeed: 140,
	  loop: false,
	  startDelay: 1000
	});

	var typed2 = new Typed(".html", {
	  // Waits 1000ms after typing "First"
	  strings: ["HTML5"],
	  typeSpeed: 140,
	  loop: false,
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


      $("[data-fancybox]").fancybox();

      

      $("#filters a").click(function() {

      		$("#filters .current").removeClass("current");
      		$(this).addClass("current");

      		var selector = $(this).attr("data-filter");

      		$(".items").isotope({
	      		filter: selector,
	      		animationOptions: {
	      			duration: 1500,
	      			easing: 'linear',
	      			queue: false
	      		}
		    });

		    return false;

      });

     $("#navigation li a").click(function(e) {
     	e.preventDefault();

     	var targetElement = $(this).attr("href");
     	var targetPosition = $(targetElement).offset().top;
     	$("html, body").animate({
     		scrollTop: targetPosition - 50
     	}, "slow");
     });


     const nav = $("#navigation");
	 const navTop = nav.offset().top;

	 $(window).on("scroll", stickyNavigation);

	 function stickyNavigation() {

	 	const body = $("body");

	 	if($(window).scrollTop() >= navTop) {
	 		body.css("padding-top", nav.outerHeight() + "px");
	 		body.addClass("fixedNav");
	 	}
	 	else {
	 		body.css("padding-top", 0);
	 		body.removeClass("fixedNav");
	 	} 

	 }
});