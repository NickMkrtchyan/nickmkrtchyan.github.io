/*==============================================================================

 * Template Name: Palat - Portfolio Template
 * Template URI: 
 * Author: ixtheme - (https://themeforest.net/user/ixtheme)
 * Description: Portfolio Template
 * Version: 1.0
 * Copyright 2018 ixtheme

==============================================================================*/

(function ($) {
    "use strict";

    $(window).on('load', function () {
        setTimeout( function() {
            $('body').addClass('loaded');
            setTimeout( function() {
                AOS.init({
                    duration: 600,
                });
                $('.loader').remove();
            }, 200);
        }, 500);
    });

    $(window).on('scroll', function () {
        $('.menu-toggle').removeClass('open');
        $('.menu-wrapper').removeClass('show');
        $('.link-item').removeClass('show');
    });


    $(document).ready(function () {
        smoothScroll();
        menuToggle();
        headerPinUnpin();
        rotateText();
    });

    // menuToggle Init
    function menuToggle() {
        $('body').on('click', '.menu-toggle', function(){
            $(this).toggleClass('open');
            $('.menu-wrapper').toggleClass('show');
            $('.link-item').toggleClass('show');
        });
    };

    // Smooth-Scroll Init
    function smoothScroll() {
        var scrollLink = $('a[href*="#"]');
        scrollLink.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });
    };

    // headerPinUnpin init
    function headerPinUnpin() {
        var lastScroll = 0;
        window.onscroll = function() {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0 && lastScroll <= currentScroll){
                lastScroll = currentScroll;
                $('header').addClass('header-unpinned');
            }else{
                lastScroll = currentScroll;
                $('header').removeClass('header-unpinned');
            }
        };
    };
	

    // rotateText
    function rotateText() {
        $('.rotate-text').marquee({
            duration: 15000,
            gap: 10,
            duplicated: true
        });
    };


})(jQuery);

const vue = new Vue({
   el: '.preloader',
   data: {
      loaded: 0,
      loading: null,
      loadStyle: {
         width: '0%'
      },
      statusElem: $('[status]'),
      loader: $('[loader]'),
      body: $('body')
   },
   ready(){
      this.preloader = $(this.$el);
      this.removeScrolling();
      this.startLoading();
   },
   watch: {
      loaded(){
         this.loadStyle.width = `${this.loaded}%`;
      }
   },
   methods: {
      removeScrolling(){
         this.body.css('overflow','hidden');
      },
      startLoading(){
         this.loading = setInterval(this.load, 20);
      },
      load(){
         this.loaded < 100 ? this.loaded++ : this.doneLoading();
      },
      doneLoading(){
         clearInterval(this.loading);
         this.updateStatus();
      },
      updateStatus(){
         this.statusElem.text('Lets get crazay !');
         this.loader.fadeOut();
         this.animatePreloader();
      },
      animatePreloader(){
         let app        = this, 
             height     = this.preloader.height(),
             properties = {
                'margin-top': `-${height}`
             },
             options    = {
                duration: 1000,
                easing: 'swing',
                complete(){
                   app.removePreloader()
                } 
             };
         this.preloader.delay(500).animate(properties, options)
      },
      removePreloader(){
         this.preloader.remove();
         this.body.removeAttr('style');
         this.animateWebsite();
      },
      animateWebsite(){
         console.log('lets get pretty');
      }
   }
})