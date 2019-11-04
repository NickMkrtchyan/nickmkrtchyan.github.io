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

var _d = document,
    _p = _d.querySelector('.preloader');

console.log(_p)

setTimeout(function(){
  _p.classList.add('is-loaded')
}, 3000)