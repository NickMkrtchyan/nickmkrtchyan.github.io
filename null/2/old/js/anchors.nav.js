$(function(){

	var contentTop = {}, contentOffset = 0, currentAnchor = window.location.hash.replace('/', ''), scrollFlag = 0, scrollLinkSelector = '.anchor-link';

	// Stop animated scroll if the user does something
	$('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
		if ( (e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel') && scrollFlag ){

			$('html,body').stop();
			scrollFlag = 0;
			setScrollAnchor();
		}
	});

	// Animate scroll after clicking menu link
	$(scrollLinkSelector).on('click', function(){
		setImmediateAnchor($(this), 800);
		$('.box-nav ul li a').removeClass('active');
		  $(this).addClass('active');
			 $('.box-nav').removeClass('slide');
	          $('.add-nav-link').removeClass('act');
		return false;
	});

	// Set browser bar anchor during scrolling
	var ifInRange = 0;
	function setScrollAnchor(){
		var scrollPositionTop = $(window).scrollTop();
				   if(!scrollFlag){
					   	ifInRange = 0;
					   $(scrollLinkSelector).removeClass('active');
						for(var p in contentTop){
							  if((contentTop[p].top - $('.header').outerHeight())<=scrollPositionTop && (contentTop[p].bottom - $('.header').height())>scrollPositionTop){
								 $('.box-nav ul li a').removeClass('active'); 
								 $(scrollLinkSelector+'[href="'+p+'"]').addClass('active');
								  if(currentAnchor!=p){
									/*-----console test-----*/
									// Recomment this line for displayin #ABOUT OF ANCHOR BY SWIPING
									//window.location.hash = '#/'+p.substr(1);
									currentAnchor = p;
									break;
								  }
							}	
						}
				}
	}
	
	// Fill object with scroll blocks data (offset and height)
	function setContentTopObject(){
		contentTop = {};
		$(scrollLinkSelector).each(function(){
			var $this = $( $(this).attr('href'));
			contentTop[$(this).attr('href')] = {'top':$this.offset().top - contentOffset, 'bottom':$this.offset().top  - contentOffset + $this.innerHeight()};
		});
	}
	
	// Set browser bar anchor immediately
	function setImmediateAnchor(anchorObject, time){
		scrollFlag = 1;
		$('html,body').stop().animate({ 'scrollTop' : contentTop[anchorObject.attr('href')].top - $('.header').height()}, time, function(){
			$('.box-nav ul li a').removeClass('active');
			anchorObject.addClass('active');
			// Recomment this line for displayin #ABOUT OF ANCHOR BY CLICKING
			//window.location.hash = '#/'+anchorObject.attr('href').substr(1);
			var currentAnchor = anchorObject.attr('href');
			scrollFlag = 0;
		});
	}

	

	$(window).load(function(){
		setContentTopObject();
		if(currentAnchor) setImmediateAnchor($(scrollLinkSelector+'[href="'+currentAnchor+'"]'), 1);
	});

	$(window).scroll(function(){

		 setScrollAnchor();

	});

	$(window).resize(function(){
		setContentTopObject();
	});

	

});