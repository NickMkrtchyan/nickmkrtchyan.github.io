/*
Author       : Themes_mountain
Template Name: Helen - Creative Resume Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
		jQuery(document).on('ready', function(){
		
			/*PRELOADER JS*/
			$(window).on('load', function() { 
				$('.status').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
			/*END PRELOADER JS*/
		
			/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});		
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
			/*END MENU JS*/		
							
			/* START COUNTDOWN JS*/
			$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter-num').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 2000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
			/* END COUNTDOWN JS */	
		
			/* START PORTFOLIO JS */
			jQuery('.grid').mixitup({
			targetSelector: '.mix',
			});
			/* END PORTFOLIO JS */
		
			/*START TESTIMONIAL*/
			$("#testimonial-slider").owlCarousel({
				items:1,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				pagination:true,
				transitionStyle:"backSlide",
				autoPlay:false
			});
			/*END TESTIMONIAL*/	
			
			/*START PARTNER LOGO*/
			$('.partner').owlCarousel({
			  autoPlay: 3000, //Set AutoPlay to 3 seconds
			  items : 4,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,2]
			});
			/*END PARTNER LOGO*/	
		
		});
		
})(jQuery);

