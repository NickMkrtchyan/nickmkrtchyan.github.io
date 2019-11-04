/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/

/* 01 - VARIABLES */
/* 02 - SWIPER SLIDER */
/* 03 - DRAG SLIDER */
/* 04 - WINDOW LOAD */
/* 05 - MOBILE MENU */
/* 06 - WINDOW SCROLL */
/* 07 - POPUPS */
/* 08 - FULLPAGE PLUGIN  */
/* 09 - SLIDER RANGE  */
/* 10 - WOW ANIMATION */
/* 11 - TITLE TEXT ANIMATION */
/* 12 - TABS */
/* 13 - SKILL ANIMATION   */
/* 14 - VIDEO YOUTUBE - VIMEO  */
/* 15 - CONTACT FORM  */
/* 16 - ISOTOPE  */
/* 17 - CLICK  */
/* 18 - CALCULATOR  */
/* 19 - AJAX LOAD */
/* 20 - MOUSEWHEEL  */
/* 21 - CUSTOME SELECT  */
/* 22 - POSTER 3D HOVER  */
/* 23 - GOOGLE MAPS  */
/* 24 - FULL PAGE SCROLL  */

jQuery(function($) { "use strict";
          
    /*============================*/
	/* 01 - VARIABLES */
	/*============================*/					
	
	var swipers = [], winW, winH, winScr, offsetScroll, fullPageHeight, _isresponsive, smPoint = 480, mdPoint = 768, lgPoint = 992, addPoint = 1200, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	function pageCalculations(){
		winW = $(window).width();
		winH = $(window).height();
        offsetScroll = ($('.single-title').innerHeight()-$('header').height()) + 'px';
        fullPageHeight = parseInt((winH - $('.header').height()),10);
        
	}
	pageCalculations();
					
   if(_ismobile) {$('body').addClass('mobile');}
					
	function updateSlidesPerView(swiperContainer){
		if(winW>=addPoint) return parseInt(swiperContainer.attr('data-add-slides'),10);
		else if(winW>=lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'),10);
		else if(winW>=mdPoint) return parseInt(swiperContainer.attr('data-md-slides'),10);
		else if(winW>=smPoint) return parseInt(swiperContainer.attr('data-sm-slides'),10);
		else return parseInt(swiperContainer.attr('data-xs-slides'),10);
	}

	function resizeCall(){
		pageCalculations();
		$('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function(){
			var thisSwiper = swipers['swiper-'+$(this).attr('id')], $t = $(this), slidesPerViewVar = updateSlidesPerView($t), centerVar = thisSwiper.params.centeredSlides;
			thisSwiper.params.slidesPerView = slidesPerViewVar;
			thisSwiper.update();
			if(!centerVar){
				var paginationSpan = $t.find('.pagination span');
				var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
				if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
				else $t.removeClass('pagination-hidden');
				paginationSlice.show();
			}
		});
	}
	if(!_ismobile){
		$(window).resize(function(){
			resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			resizeCall();
		}, false);
	}
	
    /*============================*/
	/* 02 - SWIPER SLIDER */
	/*============================*/
                    
	function initSwiper(){
		var initIterator = 0;
		$('.swiper-container').each(function(){								  
			var $t = $(this);								  
			var index = 'swiper-unique-id-'+initIterator;

			$t.addClass('swiper-'+index + ' initialized').attr('id', index);
			$t.find('.pagination').addClass('pagination-'+index);

			var autoPlayVar = parseInt($t.attr('data-autoplay'),10);
            var slideEffect = $t.attr('data-effect');
			var slidesPerViewVar = $t.attr('data-slides-per-view');
	
			if(slidesPerViewVar == 'responsive'){
				slidesPerViewVar = updateSlidesPerView($t);
			}
			
			var autoHeight = parseInt($t.attr('data-autoheight'),10);
            var directMode = $t.attr('data-mode');
			var loopVar = parseInt($t.attr('data-loop'),10);
			var speedVar = parseInt($t.attr('data-speed'),10);
            var centerVar = parseInt($t.attr('data-center'),10);
			var freeMode = parseInt($t.attr('data-freemode'),10);
			var scrollVar = parseInt($t.attr('data-scroll'),10);
            var scrollBar = false;
            if ($('.swiper-scrollbar').length){
                scrollBar = $t.attr('data-bar');
                
            }
			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
				speed: speedVar,
				pagination: '.pagination-'+index,
				paginationHide:false,
				loop: loopVar,
				paginationClickable: true,
				autoplay: autoPlayVar,
				slidesPerView: slidesPerViewVar,
				autoHeight: autoHeight,
				keyboardControl: true, 
				simulateTouch: true,
				centeredSlides: centerVar,
				effect: slideEffect,
				mousewheelControl: scrollVar,
				nextButton: '.swiper-arrow-right',
				prevButton: '.swiper-arrow-left',
				direction: directMode,
				freeMode: freeMode,
                scrollbar: scrollBar,
				fade: {
				    crossFade: false
				},
				coverflow: {
					rotate: 70,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : false
				},
				paginationBulletRender: function (index, className, swiper) {
				  if ($('.nubmer-point-style').length){
				     return '<span class="' + className + '">' + '<i>' + (index + 1) + '</i>' + '</span>';  
				  }else{
				  if ($('.point-styled-text').length){	
					var pointText = $t.find('.swiper-slide .title').eq(index).attr('data-point-text');
                    return '<span class="' + className + '">' + '<i>' + (pointText) + '</i>' + '</span>';
				  }else{
				    return '<span class="' + className + '"></span>';
				  }
				  }
					
				  
                },
				onInit: function(swiper){
				},
				onSlideChangeEnd: function(swiper){
				},
				onSlideChangeStart: function(swiper){
		           var activeIndex = (loopVar===1)?swiper.activeLoopIndex:swiper.activeIndex;
					   if($t.closest('.slider-swiching').length){
							swipers['swiper-'+$t.closest('.slider-swiching').find('.swich-parent').attr('id')].slideTo(swiper.activeIndex);
						    $t.closest('.slider-swiching').find('.slide-swich').removeClass('active');
						    $t.closest('.slider-swiching').find('.slide-swich').eq(activeIndex).addClass('active');
					    }
					if($t.closest('.single2-slider').length){
					   $('.main-content').addClass('open-panel');
					   $('.close-nav-bar').addClass('active');
					}  	
				}
			});
			
			swipers['swiper-'+index].update();
				if($t.attr('data-slides-per-view')=='responsive'){
					var paginationSpan = $t.find('.pagination span');
					var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
					if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
					else $t.removeClass('pagination-hidden');
					paginationSlice.show();
				}
			initIterator++;
		});
		
	}

	initSwiper();
					
			
	$(document).on('click','.slide-swich', function(){
		var swichIndex = $(this).closest('.slider-swiching').find('.slide-swich').index(this);
		 $(this).closest('.slider-swiching').find('.slide-swich').removeClass('active');	
		  $(this).addClass('active');	
			swipers['swiper-'+$(this).closest('.slider-swiching').find('.container-swich').attr('id')].slideTo(swichIndex);		
		  return false;
	});
                    
    /*============================*/
	/* 03 - DRAG SLIDER */
	/*============================*/                
                    
    $('.counter-length').text($('.index-slider').length);    
                    
		var element = $('.draggable-ruler'),
            doc = $(document),
            elemWidth = $('.draggable-ruler').width(),
            parentWidth = $('.range-slide').width(),
            parentHalfWidth = $('.range-slide').width()*0.5,
            curPos,
            curentNumb = parseInt($('.counter-number').text(),10),
            elemLenght = parseInt($('.index-slider').length,10),
            counter = 1,
            elemOffset = parentWidth - elemWidth;
        
        doc.on('click', '.drag-end', function(e){ 
               
           if ($('.index-slider:last').hasClass('active')){
                    $('.index-slider.active').removeClass('active');
                    $('.index-slider:first').addClass('active');
           }else{
              counter++;
              element.animate({'left':elemOffset});
                $('.index-slider.active').removeClass('active').next().addClass('active');
                  $('.counter-number').text(counter);
                      setTimeout(function(){
                         element.animate({'left':0});  
                      },1000);
           }
        });
            
		element.on('mousedown touchstart', function(e){ 
			e = (e.originalEvent.touches) ? e.originalEvent.touches[0] : e;
			var $t = $(this),
                startPos = e.pageX,
                defPos = $t.position().left;
            doc.on('mousemove.rem touchmove.rem',function(e){ 
                e = (e.originalEvent.touches) ? e.originalEvent.touches[0] : e; 
                curPos = e.pageX;
                
                var leftPos = parseInt((100+defPos+curPos-startPos),10) + '%';
                        $t.css({'left':defPos+curPos-startPos});
                        $('.index-slider.active').find('.clip-text').css({'background-size':leftPos});
            });

			doc.on('mouseup.rem  touchend.rem',function(e){											
                element.off('.rem');
                doc.off('.rem');
                var leftPos = parseInt((100+defPos+curPos-startPos),10) + '%'; 
                if($t.position().left + (elemWidth/2)  >= parentHalfWidth) {
                    
                   element.animate({'left':elemOffset});
                    if ($('.index-slider:last').hasClass('active')){
                        $('.index-slider.active').removeClass('active');
                        $('.index-slider:first').addClass('active');
                        if ($('.index-slider:first').hasClass('active')){
                            counter = 1;
                            $('.counter-number').text(counter);
                        }
                    }else{
                        counter++;
                        $('.index-slider.active').removeClass('active').next().addClass('active');
                        $('.counter-number').text(counter);
                    }

                      setTimeout(function(){
                         element.animate({'left':0});  
                      },1000);
                  
                }else {
                   element.animate({'left':0});
                    $('.index-slider.active').find('.clip-text').css({'background-size':'100%'});
                }
            });

    });                
		
	/*============================*/
	/* 04 - WINDOW LOAD */
	/*============================*/			
					
	$(window).load(function(){
		izotopInit();
		HeaderScroll();
		singlePageScroll();
        $('.preload').fadeOut(1000);
		if ($('.popup-ajax').length){
		    $('body').addClass('overflowh');
			$('.popup-ajax').addClass('active');
		}
        if ($('.map-wrapper').length){	
            setTimeout(function(){initialize();}, 1000);
        }
        if ($(window).width()>1024){
            if($('.wrapper-full-scroll').length){
                $('body').addClass('overflowh');
                $('.full-scroll-section').height(fullPageHeight);
            }
        }
	});

	/*============================*/
	/* 05 - MOBILE MENU */
	/*============================*/
	
	$(document).on('click', '.burger', function(){
	    $('.header nav').toggleClass('slide');
	      $(this).toggleClass('active');
		   $('.container-perspective').toggleClass('push-content');
	});
					
	$('.open-menu').on('click', function(){
	  $(this).toggleClass('act').add().parent().parent().find('> .sub-menu').slideToggle(300);
		 return false;
	});				
	
	/*============================*/
	/* 06 - WINDOW SCROLL */
	/*============================*/
	
    $(window).scroll(function() {
       HeaderScroll();
	   parallax();
	   singlePageScroll();
	});
                    
 
	function parallax(){
     if ($(window).width()>1200) {  
	  var scrolled = $(window).scrollTop();
	  $('.scroll-fade').css('top',-(scrolled*0.0315)+'rem');
	  $('.scroll-fade').parent().find('.fade-elem').css('top',-(scrolled*-0.005)+'rem');
	  $('.scroll-fade').parent().find('.fade-elem').css('opacity',1-(scrolled*.00275));
     } 
	}
									
	function singlePageScroll(){
		$('.over-wrapp').scroll(function() {
		   if ($(this).scrollTop() >= $('.single-title').height()){
			   $('.main-baner-full').addClass('hold');
		   }else{
			   $('.main-baner-full').removeClass('hold');
		   }

		});
	}
	singlePageScroll();				
					
    function HeaderScroll(){
	   if ($(window).scrollTop() >= 90) {
	       $('.header').addClass('bg-scroll');
	   }else{
	       $('.header').removeClass('bg-scroll');
	   }
	}
                                   
	
    /*============================*/
	/* 07 - POPUPS */
	/*============================*/
					
    $('.open-panel').on('click', function(){
	  var relPopup = $(this).attr('data-rel');
	    $('.popup-'+relPopup+'').toggleClass('active');
		     if ($(this).hasClass('open-effect')) {
				 $('.effect-push').toggleClass('persp');
				 $('.container-perspective').toggleClass('persp');
				 setTimeout(function(){
				    $('.container-perspective').toggleClass('add-effect');
				 },200);
				 $('body, html').addClass('full-h');
                 $('.fullpage-wrapper').removeClass('onepage-wrapper');
				 $('body').toggleClass('overflow');
			 }
		return false;
	});
					
	$(document).on('click', '.close, .add-effect', function(){
       
	    $('.popup').removeClass('active');
		  $('body').removeClass('overflow');
		     $('.container-perspective').removeClass('add-effect');
		       setTimeout(function(){
				 $('.effect-push').removeClass('persp');
				 $('.container-perspective').removeClass('persp');
			     $('body, html').removeClass('full-h');
			   },510);
	});
		
                    
    /*============================*/
	/* 08 - FULLPAGE PLUGIN  */
	/*============================*/
     
    if ($('.onepage-wrapper').length && $(window).width()>1200){				
        $('.onepage-wrapper').fullpage({
             sectionSelector: '.section-scroll',
             verticalCentered: true,
             normalScrollElements: '.footer, .section-normal',
             fitToSection: false,
             navigation: true,
             navigationPosition: 'right'
        });	
    }
                                
    $('.minus-val').on('click', function(){
	    var inputVal = $(this).parent().find('input');
		var count = parseInt((inputVal.val()),10) - 1;
	    count = count < 1 ? 1 : count;
	    inputVal.val(count);
	    inputVal.change();
		
	    return false;
	});	
					
    $('.plus-val').on('click', function () {
	    var inputVal = $(this).parent().find('input');
	    inputVal.val(parseInt((inputVal.val()),10) + 1);
	    inputVal.change();
	    return false;
	});					
	
	$('.close-item').on('click', function () {
	   $(this).parent().fadeOut(300);
	});
					
	$('.close-result').click(function () {
	   $(this).parent().find('input').val('','');
	});				
					
	$('.input-entry').on('click', function(){
      if ($(this).hasClass('act')){
	      $(this).removeClass('act');
		  $(this).find('.checkbox-form').removeAttr('checked');
	  }else{
	      $(this).addClass('act');
		  $(this).find('.checkbox-form').attr('checked',true);
	  }
    });
					
	$('.input-entry.radio').on('click', function(){
		$(this).closest('.radio-wr').find('.radio').removeClass('act');
		$('.checkbox-form').removeAttr('checked');
		$(this).addClass('act');
		$(this).find('.checkbox-form').attr('checked',true)
    });	
		
	$('.tags-link a').on('click', function(){
	    $('.tags-link a').removeClass('act');
		 $(this).addClass('act');
		   return false
	});
	
	$('.load-more-item').on('click', function(){
		$(this).prev().prev().find('> div').not('.grid-sizer').clone().appendTo('.load-container');
		setTimeout(function(){

		},500);
		
		 return false;
	});
                    
    $(document).on('click', '.text-change-field', function(){
         $(this).parent().find('.mini-project-filter').slideToggle(300); 
        
    });                
                    
                    
										
    /*==============================*/
	/* 09 - SLIDER RANGE  */
	/*==============================*/
	
	if ($('.range-slider').length){
		
		var rangeFrom = parseInt($('.range-slider').attr('data-from'),10),
			rangeTo = parseInt($('.range-slider').attr('data-to'),10),
			rangeStep = parseInt($('.range-slider').attr('data-step'),10),
			rangeFormat = $('.range-slider').attr('data-format'),
			rangeWidth = parseInt($('.range-slider').attr('data-width'),10);
		$('.range-slider').jRange({
			from: rangeFrom,
			to: rangeTo,
			step: rangeStep,
			format: rangeFormat,
			width: rangeWidth,
			showLabels: true,
			isRange : true,
			ondragend: function(range){
			    $('.amount-start').val($('.pointer-label.low').text());
				$('.amount-end').val($('.pointer-label.high').text());
			}
		});	
	}
					
	/*============================*/
	/* 10 - WOW ANIMATION */
	/*============================*/
									
	function Reval(){				
		window.sr = ScrollReveal();

			sr.reveal('.wow', { 
				reset: false,
				duration: 800,
				opacity: 0,
				scale: 0.8,
				mobile:false,
			});	
		}
					
	if ($('.wow').length){				
	   Reval();
	}				
					
	/*============================*/
	/* 11 - TITLE TEXT ANIMATION */
	/*============================*/
    
	var sentenceVal1 = $('.text-animation').attr('data-first'),
		sentenceVal2 = $('.text-animation').attr('data-second'),
		sentenceVal3 = $('.text-animation').attr('data-third');
	if ($('.text-animation').length){				
		  $('.text-animation').typed({
			strings: [sentenceVal1, sentenceVal2, sentenceVal3],
			typeSpeed: 50
		  });		
	}
					
	var sentenceVal4 = $('.text-animation2').attr('data-prev'),
		sentenceVal5 = $('.text-animation2').attr('data-next');
	if ($('.text-animation2').length){				
		  $('.text-animation2').typed({
			strings: [sentenceVal4, sentenceVal5],
			typeSpeed: 60
		  });		
	}				
					
	/*============================*/
	/* 12 - TABS */
	/*============================*/
					
	$('.link-swich').on('click', function(){
	    var thisLink = $(this).attr('data-swich');
		  $('.tab-item').removeClass('active');
		  $('.tab-container').find('.tab-'+thisLink+'').addClass('active');
        	return false;	  
	});				
									
	/*============================*/
	/* 13 - SKILL ANIMATION   */
	/*============================*/				
					
	var hasCreatedObjects = false;
	$(window).scroll(function() {
	   if ($('.time-line').length) {
		 $('.time-line').not('.animated').each(function(){
		  if($(window).scrollTop() >= $(this).offset().top-$(window).height()*0.5)
		   {
			   $(this).addClass('animated').find('.timer').countTo();
			   if (!hasCreatedObjects) {
					hasCreatedObjects = true;
				    $('.circle-item').each(function(index) {
     	               $(this).find('.skill-circle').attr('id','circle-range-'+index);
	  	                 $('#circle-range-'+index).circliful();
					}); 
                }
		   }
		 });
		}
	});
					
	/*============================*/
	/* 14 - VIDEO YOUTUBE - VIMEO  */
	/*============================*/				
					
	$(document).on('click', '.play-button', function(){
	   var videoLink = $(this).attr('data-video'),
		   thisAppend = $(this).parent().parent().find('.video-iframe');
		   $(this).parent().parent().find('.video-item').addClass('act');
		   $('<iframe>').attr('src', videoLink).appendTo(thisAppend);
		return false;
	});
			  
	$(document).on('click', '.close-video', function(){
		var videoClose = $(this).parent().find('.video-iframe');
	     $(this).parent().parent().parent().find('.video-item').removeClass('act');
		  videoClose.find('iframe').remove();
		  return false;
	});	
					
	/*============================*/
	/* 15 - CONTACT FORM  */
	/*============================*/				
	
	$('.number-total').text($('.questions li').length);
                    
	$(document).on('click', '.next-step', function(){
	    var $this = $(this),
			stepNumb = $(this).closest('.questform').find('.questions li').length,
			stepIter = 100/stepNumb,
			progressLine = $(this).closest('.questform').find('.progress-line'),
			activeField = $('.questions li.active'),
		    activeFieldInput = $('.questions li.active').find('input'),
			errorMess = $(this).closest('.questform').find('.error-message'),
			counter = $(this).closest('.questform').find('.number-current');
            
		    if (activeFieldInput.val()!=='') {
                if ($('.questions li').last().hasClass('active')) {
                    $('.questform').addClass('last-step');

                }
			    progressLine.animate({width:'+='+stepIter+'%'},300);
				activeField.addClass('move');
				setTimeout(function(){
				   activeField.removeClass('active').next().addClass('active').find('input').focus();
				},300);
				errorMess.removeClass('act');
				counter.text((activeField.index()+1)+1);
			}else{
			    errorMess.addClass('act');
			}
        if ($('.questions li').last().prev().hasClass('active')) {
             $('.submit-button').show();
        }
            
		return false;
	});
					
	$('.questions input').keydown(function (e) {
	  if (e.keyCode == 13) {
		  $('.next-step').click();
		    return false; 
	  }
	});				
			
    /*============================*/
	/* 16 - ISOTOPE  */
	/*============================*/					
					
	function izotopInit() {
	  if ($('.izotope-container').length) {
	    var $container = $('.izotope-container');
	  	  $container.isotope({
			itemSelector: '.item',
			layoutMode: 'masonry',
			percentPosition: true,
			masonry: {
			  columnWidth: '.grid-sizer'
			}
		  });
			$('.filter-list').on('click', 'li', function() {
			  $('.izotope-container').each(function(){
				 $(this).find('.item').removeClass('animated');
			  });
				 $('.filter-list li').removeClass('active');
				 $(this).addClass('active');
				   var filterValue = $(this).attr('data-filter');
					$container.isotope({filter: filterValue});
			});    
	  }
	}				
	izotopInit();
					
	$('.load-more-block').on('click', function(){
	  $('.izotope-append').addClass('act');
		setTimeout(function(){
		   izotopInit();  
		});

		return false;
	});
					
	/*============================*/
	/* 17 - CLICK  */
	/*============================*/				
				
	if ($(window).width()<992) {			
		$(document).on('click', '.slide-lidt-text', function(){
			$(this).parent().find('.slide-toggle-list').slideToggle(300);
		});				
		$(document).on('click', '.slide-toggle-list li', function(){
		   $(this).closest('.mobile-toggle-slide').find('.slide-lidt-text span').text($(this).text());
			 $('.slide-toggle-list').slideUp(300);
		});	
	}
					
	$(document).on('click', '.list-toggle li', function(){
	  $(this).find('ul').slideToggle(300);
		$(this).find('.arrow').toggleClass('act'); 
		 return false;
	});	
					
	$('.reg-input input').on('focusin', function(){
	    $(this).parent().addClass('active');
	});				
	$('.reg-input input').on('focusout', function(){
	  if ($(this).val()!=''){	
	      $(this).parent().addClass('active');
	  }else{
	      $(this).parent().removeClass('active');
	  }
	});
	
	$('.close-desc').on('click', function(){
	  $('.main-content').addClass('open-panel');
	});
	
	$(document).on('click', '.open-form', function(){
	  $('body').addClass('overflow');
	   $('.bottom-step-form').addClass('active');	
		 $('.container-perspective').addClass('open-bottom');  
	});				
    
	$(document).on('click', '.pusher-layer', function(){
		   $('.container-perspective').removeClass('open-bottom');
		   $('body').removeClass('overflow');
			   setTimeout(function(){
				  $('.bottom-step-form').removeClass('active');
			   },500);   
	});
					
    $(document).on('click', '.close-form', function(){
      $('.pusher-layer').click();
    });					
		
	$('.service-nav li').on('click', function(){
		 var indexVal = $('.service-nav li').index(this);
	     $('.service-nav li').removeClass('active');	
            $(this).addClass('active');	
			$(this).parent().find('span').css({'top': $(this).offset().top -$(this).parent().offset().top});   
		   
             if ($('.scrol-section').eq(indexVal).hasClass('active')){
                 $('.scrol-section').removeClass('first');
                 $('.scrol-section').eq(indexVal).addClass('first').removeClass('active'); 
             
             }else{
                 $('.scrol-section').removeClass('first');
	             $('.scrol-section').eq(indexVal).prev().addClass('active').next().addClass('first'); 
             }     
	});
					
	$('.scroll-down img').on('click', function(){
	    $('body, html').animate({'scrollTop' : $('.scroll-down-block').offset().top - $('header').height()},500)
	});
					
	$('.team-slide-item').on('mouseenter', function(){
	  $('.team-slide-item').removeClass('out').addClass('in');	
	    $(this).removeClass('in').addClass('out');
	});
					
	$('.team-slide-item').on('mouseleave', function(){
	  $('.team-slide-item').removeClass('out').removeClass('in');	
	});
					
	$('.close-nav-bar').on('click', function(){
	  $(this).toggleClass('active');	
	    $('.single3-slider-point').toggleClass('active');
		 $('.main-content').toggleClass('open-panel');
	});
					
	$('.add-nav-link').on('click', function(){
	   $(this).toggleClass('act');
		$('.box-nav').toggleClass('slide');
		  return false;
	});				
					
	/*============================*/
	/* 18 - CALCULATOR  */
	/*============================*/
					
	$('.price-period-check a').on('click', function(){
	  $('.price-period-check a').removeClass('active');	
	    $(this).addClass('active');
		  if ($('.year-press').hasClass('active')) {
		      $('.price-item').each(function(){
			     var $this = $(this);
				  $this.addClass('year');
				  $this.find('.price-value b').text($this.find('.price-value b').attr('data-year'));
				  $this.find('.price-value span').text($this.find('.price-value span').attr('data-year'));
			  });
		  }else{
		      $('.price-item').each(function(){
			     var $this = $(this);
				  $this.removeClass('year');
				  $this.find('.price-value b').text($this.find('.price-value b').attr('data-mon'));
				  $this.find('.price-value span').text($this.find('.price-value span').attr('data-mon'));
			  });
		  }
		  return false;
	});
	
    var maxVal = $('.range-bar-start').attr('max');
	    $('.select-price').on('click', function(){
		  var thisVal = parseInt($(this).attr('data-val'),10),
			  lineStep = (thisVal*100)/maxVal+'%',
			  $this = $(this);
				if ($this.hasClass('active')) {
					 $this.removeClass('active');	
				}else{
					 $this.closest('.step-slider').find('.select-price').removeClass('active');	
					 $this.addClass('active');
					 $('.line-active').css({'width':lineStep});
					 $('.range-bar-start').val(thisVal);
				}      
    });
						
	$('.next-price-step').on('click', function(){
	     $('.step-slider.active').removeClass('active').next().addClass('active');
		     $('.total-price span').text($('.range-bar-start').val());
		return false;
	});	
					
	$('.back-price-step').on('click', function(){
	   $('.step-slider.active').removeClass('active').prev().addClass('active');
		  return false;
	});
									
	/*==============================*/
	/* 19 - AJAX LOAD */
	/*==============================*/		  			  

	function showprogress() {
	  if (document.images.length == 0) {return false;}
	  var loaded = 0;
	  for (var i=0; i<document.images.length; i++) {
	   if (document.images[i].complete) {
		loaded++;
	   }
	  }
	  percentage  = (loaded / document.images.length);
	 }
			  
	var ID, percentage, ajaxFinish = 0;
	var _if_state = (typeof(history.replaceState) !== "undefined")?true:false;

	if(_if_state){
	 history.replaceState({url:location.pathname.replace("/", "")}, null, null);
	}

	function setLocation(curLoc){
	 var state = {url:curLoc};
		history.pushState(state, null, curLoc);
	 return false;
	}
     
    if ($('.call-transition').length) {                 
        window.addEventListener("popstate", function(event) {
            transitionAjax(event.state.url);
        });
    }
    
	function transitionAjax(foo){
		if(ajaxFinish) return false;
		ajaxFinish = 1;
		var url = foo;
		$('.call-transition').parent().removeClass('active');
		$('.call-transition[href="'+url+'"]').parent().addClass('active');

		$.ajax({
			type:"GET",
			async:true,
			url: url,
			success:function(response){
             $('.preload').fadeIn(100);
				var responseObject = $($.parseHTML(response));
				$('.content-load').animate({'opacity':'0'}, 500, function(){
					$(this).html(responseObject.find('.ajax-load-content').parent().html());

					ID = window.setInterval(function(){
						showprogress();
						if (percentage == 1) {
							window.clearInterval(ID);
							percentage = 0;
                                initSwiper();
                                $(window).scroll();
                                    $('.content-load').animate({'opacity':'1'}, 1000, function(){
                                        $(window).load();
                                        ajaxFinish = 0;	

                                    });
						}
					});

				});

				setLocation(url);
			}
		});

	}
	                 
   $(document).on('click', '.call-transition', function(){
        if(_if_state && !_ismobile){
          transitionAjax($(this).attr('href'));
            return false;
      }
    });
                    
    /*============================*/
	/* 20 - MOUSEWHEEL  */
	/*============================*/
		  	
	$(document).on('mousewheel', function(event) {
   
	    if(event.deltaY>0) {
			$('.scroll-hidden').removeClass('active');
             if(_if_state && !_ismobile){
               if (ajaxFinish==0){
                  $('.solo-header ul li.active').prev().find('a').click();
               }
             }
		}else{
            $('.scroll-hidden').addClass('active');
              if(_if_state && !_ismobile){
               if (ajaxFinish==0){
                  $('.solo-header ul li.active').next().find('a').click();
               }
              }
		}
	});

    
    $('.section-offset-container').scroll(function(){
       if ($(this).scrollTop() > $(window).height()*0.5){
           
           $('.main-baner-full').addClass('hold');
       }else{
           $('.main-baner-full').removeClass('hold');
       }
    });

    $(document).on('click', '.close-ajax-popup', function(){
	    $('body').removeClass('overflowh');
		  $('.popup-ajax').removeClass('active');
	}); 

    $(document).on('click', '.project-filter a', function(){
		 $('.project-filter a').removeClass('active');
		   $(this).addClass('active');
	});
   
    $(document).on('click', '.mini-nav li a', function(){
     $('.mini-nav li a').removeClass('active');	
	  $(this).addClass('active');
	});

    $(document).on('click', '.solo-open-menu', function(){
	  $('.container-perspective').addClass('persp');	
	   $('.container-perspective').addClass('open-solo-menu');
		  setTimeout(function(){
		     $('.solo-header').addClass('show-solo-menu');
		  },510);
	});
    
    $(document).on('click', '.open-solo-menu .effect-push, .solo-close-menu', function(){
	    $('.container-perspective').removeClass('open-solo-menu');
		 $('.solo-header').removeClass('show-solo-menu');
		   setTimeout(function(){
			 $('.container-perspective').removeClass('persp');
		   },510);
	});

    $(document).on('click', '.solo-header li a', function(){
	$('.solo-header li').removeClass('active');	
	 $(this).parent().addClass('active');
	   setTimeout(function(){
		$('.solo-header').removeClass('show-solo-menu');
	    $('.container-perspective').removeClass('open-solo-menu');
		   setTimeout(function(){
			 $('.container-perspective').removeClass('persp');
		   },510);
	   },1000);
	});
    
    $(document).on('click', '.open-slider', function(){
	  $('.revers-color').toggleClass('active');
	});

    $(document).on('click', '.open-all-project', function(){
	 $(this).toggleClass('act');	
	  $(this).parent().toggleClass('open-all');
		  
	});
    
    if ($(window).width()>992 && $('.parallax-animation').length){
          ParallaxScroll.init();
	}
              
	/*============================*/
	/* 21 - CUSTOME SELECT  */
	/*============================*/
					
	$('.drop-down-text').on('click', function(){
	   if ($(this).parent().hasClass('act')){
	       $(this).parent().removeClass('act');
		   $(this).parent().find('.drop-down-list').slideUp(300);
	   }else{
		   $('.drop-down').removeClass('act');
	       $(this).parent().addClass('act');
		   $('.drop-down-list').slideUp(300);
		   $(this).parent().find('.drop-down-list').slideDown(300);
	   }	
	});
					
	$('.drop-down-list li').on('click', function(){
	   $(this).closest('.drop-down').find('.drop-down-text span').text($(this).text());
		$(this).closest('.drop-down').find('.drop-down-text').removeClass('act');
		 $(this).parent().slideUp(300);
	});				
		
	/*============================*/
	/* 22 - POSTER 3D HOVER  */
	/*============================*/
	
	if ($(window).width()>1200){				
	var $poster = $('.poster'),
	    $shine = $('.shine'),
	    $layer = $('.layer-bg'),
	    w = $('.poster').width(), //window width
	    h = $('.poster').height(); //window height
		$(document).on('mousemove', '.poster', function(e) {
		var offsetX = 1.2 - e.pageX / w, //cursor position X
			offsetY = 1.2 - e.pageY / h, //cursor position Y
			dy = e.pageY - h / 2, //@h/2 = center of poster
			dx = e.pageX - w / 2, //@w/2 = center of poster
			theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
			angle = theta * 180 / Math.PI - 90, //convert rad in degrees
			offsetPoster = $(this).data('offset'),
			transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

		  if (angle < 0) {
			angle = angle + 360;
		  }

		  $shine.css('background', 'linear-gradient(' + angle*10 + 'deg, rgba(255,255,255,' + e.pageY / h + ') 0%,rgba(255,255,255,0) 80%)');

		  $(this).css('transform', transformPoster);
			  var offsetLayer = $(this).find('.layer-bg').data('offset') || 0,
			  transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';
			   $(this).find('.layer-bg').css('transform', transformLayer);
		});
					
		$(document).on('mouseleave', '.poster', function(e) {
		    $(this).css('transform', 'translateY(0) rotateX(0) rotateY(0)'); 
		});	
	 }
                    
     /*============================*/
	 /* 23 - GOOGLE MAPS  */
	 /*============================*/

     var marker = [], infowindow = [], map, image = $('.map-wrapper').attr('data-marker');

     function addMarker(location,name,contentstr){
        marker[name] = new google.maps.Marker({
            position: location,
            map: map,
			icon: image
        });
        marker[name].setMap(map);

		infowindow[name] = new google.maps.InfoWindow({
			content:contentstr
		});
		
		google.maps.event.addListener(marker[name], 'click', function() {
			infowindow[name].open(map,marker[name]);
		});
     }
	
	 function initialize() {

		var lat = $('#map-canvas').attr("data-lat");
		var lng = $('#map-canvas').attr("data-lng");
		var mapStyle = $('#map-canvas').attr("data-style");

		var myLatlng = new google.maps.LatLng(lat,lng);

		var setZoom = parseInt($('#map-canvas').attr("data-zoom"),10);

		var styles = "";

		if (mapStyle=="1"){
			styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
		}else{
            if (mapStyle=="2"){
              styles = [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}];   
            } 
        }
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
        
        var draggMap;
        if (!_ismobile) {
           draggMap = true;  
        }else{
           draggMap = false;  
        }
         
		var mapOptions = {
			zoom: setZoom,
			disableDefaultUI: false,
			scrollwheel: false,
			zoomControl: true,
			streetViewControl: true,
			center: myLatlng,
            draggable: draggMap
		};
		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		
		map.mapTypes.set('map_style', styledMap);
  		map.setMapTypeId('map_style');
		

		$('.addresses-block a').each(function(){
			var mark_lat = $(this).attr('data-lat');
			var mark_lng = $(this).attr('data-lng');
			var this_index = $('.addresses-block a').index(this);
			var mark_name = 'template_marker_'+this_index;
			var mark_locat = new google.maps.LatLng(mark_lat, mark_lng);
			var mark_str = $(this).attr('data-string');
			addMarker(mark_locat,mark_name,mark_str);	
		});
	 }
               
	 /*============================*/
	 /* 24 - FULL PAGE SCROLL  */
	 /*============================*/
                    
     var holding_stop = 0,
         finish_holding = 0,
         minH = parseInt((winH - $('.header').height()),10),
         activePage = $('.full-scroll-section.active').data('rel');
                    
     function setWrapperTransform(){
		   var value = parseInt($('.full-scroll-section.active').data('rel'), 10)*minH*(-1),
               transformOffset = 'translateY(' + value + 'px)';
		       $('.wrapper-full-scroll').css({'transform':transformOffset});
	 }
     function clickVslNext(){
		$('.nav-page-pagination li.active').next().click();
	 }
	 function clickVslPrev(){
		$('.nav-page-pagination li.active').prev().click();
	 }                
                    
    var stop = 0;
	 $(document).on('click', '.nav-page-pagination li', function(){
        if($(this).hasClass('active') || stop) return false;
		stop = 1;
		setTimeout(function(){
			 stop = 0;
		}, 1000);
		$('.nav-page-pagination li').removeClass('active');
		$(this).addClass('active');
		$('.full-scroll-section.active').removeClass('active');
		$('.full-scroll-section[data-rel="'+$(this).data('rel')+'"]').addClass('active');
		setWrapperTransform();
        return false;
	});                
                    
    if($(window).width()>1024){               
	 if($('.wrapper-full-scroll').length){
        if(!_isresponsive){
            $('.wrapper-full-scroll').mousewheel(function(event, delta) { 
                var activePage = $('.full-scroll-section.active').data('rel');
                        if(delta < 0){
                            clickVslNext();
                            $('.menu-scrol li a').removeClass('active'); 
                            $('.menu-scrol li a[data-rel="'+activePage+'"]').addClass('active');
                        }
                        if(delta > 0){
                            $('.menu-scrol li a').removeClass('active'); 
                            $('.menu-scrol li a[data-rel="'+activePage+'"]').addClass('active');
                            clickVslPrev();
                        }
                    event.preventDefault();
            });
        }
      }
    }
        
    $(document).on('click', '.menu-scrol li a', function(){    
      $('.menu-scrol li a').removeClass('active'); 
	   $(this).addClass('active');
        var hrefVal = $(this).attr('data-rel');
        if($(window).width()>1024){
            $('.full-scroll-section.active').removeClass('active');
            $('.nav-page-pagination li').removeClass('active');
            $('.full-scroll-section[data-rel="'+hrefVal+'"]').addClass('active');
            $('.nav-page-pagination li[data-rel="'+hrefVal+'"]').addClass('active');
          setWrapperTransform();
        }else{
           $('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - $('header').height()
			}, 500);  
        }
        return false;
	});                
   
    $(document).on('click', '.scroll-down-section', function(){
		$('.nav-page-pagination li').eq(1).click();
        $('.menu-scrol li a').eq(0).addClass('active');
	});                
                    
 });
 
 
 