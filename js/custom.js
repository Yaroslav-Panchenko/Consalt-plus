$(document).ready(function(){
	// ------------Touchswipe for mobile devices--------------------
	$(".carousel").swipe({
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});
// ----------------Section Project Overlay----------------------
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

// ---------------------Blog tabs-----------------------------------
	$('#all-post-btn').click(function() {
		$(this).addClass('active-button');
		$('#top-post-btn').removeClass('active-button');
		$('.top-post').hide(500);
		$('.all-post').show(500);
		$('.blog').css({'background-color' : '#c2efff', 'transition' : '1s',});
	});
	$('#top-post-btn').click(function() {
		$(this).addClass('active-button');
		$('#all-post-btn').removeClass('active-button');
		$('.all-post').hide(500);
		$('.top-post').show(500);
		$('.blog').css({'background-color' : '#e7eff1', 'transition' : '1s'});
	});

// -------------parallel operation of two groups of indicators---------------
	$('[data-slide-to="0"]').click(function(){
		$('.inner-indicator-item').addClass('active-inner');
		$('[data-slide-to="1"], [data-slide-to="2"]').removeClass('active-inner');
	});
	$('[data-slide-to="1"]').click(function(){
		$('.inner-indicator-item').addClass('active-inner');
		$('[data-slide-to="0"], [data-slide-to="2"]').removeClass('active-inner');
	});
	$('[data-slide-to="2"]').click(function(){
		$('.inner-indicator-item').addClass('active-inner');
		$('[data-slide-to="0"], [data-slide-to="1"]').removeClass('active-inner');
	});
});

