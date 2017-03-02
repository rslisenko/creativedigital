//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
// require javascripts/bootstrap.min.js

//=require slick.min.js

;(function($) {
	"use strict";

	$(function(){
		$('.ba-first-slider').slick(
		{
			infinite: true,
			slidesToShow: 1,
			dots:true,
			slidesToScroll: 1,
			slide: '.ba-first-slider__item',
			prevArrow: '.ba-first-slider__prev',
			nextArrow: '.ba-first-slider__next'
		});

		$('.ba-second-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slide: '.ba-second-slider__item',
			prevArrow: '.ba-second-slider__prev',
			nextArrow: '.ba-second-slider__next',
			slidesToScroll: 4,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
		var poltavaInfo = document.querySelector('.ba-poltava-info');
		poltavaInfo = poltavaInfo.innerHTML;
		var home = {lat: 49.5925522, lng: 34.5471276};
		var mapDiv = document.querySelector('.ba-map');
		var map = new google.maps.Map(mapDiv, {
			zoom: 17,
			center: home,
			disableDefaultUI: true
		});

	});
})(jQuery);



















