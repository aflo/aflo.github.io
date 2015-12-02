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

	function parallax() {
		var scrolled = $(window).scrollTop();
		$('#title-section').css('top',(scrolled*0.6)+'px');
	}
	$(window).scroll(function() {
		parallax();
	});
});

