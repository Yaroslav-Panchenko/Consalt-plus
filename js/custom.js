$(document).ready(function(){
	// ------------Touch slider for mobile devices--------------------
	$(".carousel").swipe({
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});
// ----------------Section Project----------------------
	$(".project-banking-corner").click(function () {
		$(this).toggleClass('corner-active');
		$('.project-banking-overlay').toggleClass('none');
		$('.plus').toggleClass('fa-plus fa-minus');
	});
	$(".project-building-corner").click(function () {
		$(this).toggleClass('corner-active');
		$('.project-building-overlay').toggleClass('none');
		$('.building-plus').toggleClass('fa-plus fa-minus');
	});
	$(".project-technology-corner").click(function () {
		$(this).toggleClass('corner-active');
		$('.project-technology-overlay').toggleClass('none');
		$('.technology-plus').toggleClass('fa-plus fa-minus');
	});
	$(".project-estate-corner").click(function () {
		$(this).toggleClass('corner-active');
		$('.project-estate-overlay').toggleClass('none');
		$('.estate-plus').toggleClass('fa-plus fa-minus');
	});

});
