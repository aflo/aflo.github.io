$(document).ready(function() {

	//sidebar movement
	$("#sidebar-but").click(function() {
		if ($(".sidebar-container").hasClass("sidebar-active")) {
			$('body').removeClass('no-scroll');
			$("#sidebar-but").removeClass("button-active");
			$(".sidebar-container").removeClass("sidebar-active");
			$(".page-wrapper").removeClass("wrapper-active");
		} else {
			$("#sidebar-but").addClass("button-active");
			$(".sidebar-container").addClass("sidebar-active");
			$(".page-wrapper").addClass("wrapper-active");
			setTimeout(function() {
				$('body').addClass('no-scroll');
			},300);
		}
	});

	//Slideshow
	$(function() {

		var width = 800;
		var speed=3000;
		var pause=5000;
		var currentSlide=1;
		var slider = $('.slideshow-container');
		var container = slider.find('.slides');
		var slides = container.find('.slide');

		var interval; 

		function start() {
			interval=setInterval(function() {
				container.animate({'margin-left':'-='+width}, speed, function() {
					currentSlide++;
					if (currentSlide==slides.length) {
						currentSlide=1;
						container.css("margin-left",0);
					}
				});

			},pause);
		}
		function stop() {
			clearInterval(interval);
		}
		slider.on('mouseenter',stop).on('mouseleave', start);
		start();
	});
	
	function parallax() {
		var scrolled = $(window).scrollTop();
		$('#title-section').css('top',(scrolled*0.6)+'px');
	}
	$(window).scroll(function() {
		parallax();
	});
});

