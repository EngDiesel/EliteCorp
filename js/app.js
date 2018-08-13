/*global $, window*/
$(function () {
    'use strict';
    // Start Global
    function activeClassHandeler(className) {
        $(className).each(function () {
            $(this).click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    }
    // End Global

    // start Navbar
    activeClassHandeler('.nav-item');
    // End Navbar

    // Start Slider
    function adjustSliderHieght() {
        var winH = $(window).height(),
            upperH = $('.upper-bar').innerHeight(),
            navH = $('.navbar').innerHeight();
        $('.slider, .carousel-item').height(winH - (upperH + navH));
    }
    adjustSliderHieght();
    $('.slider .carousel').carousel({
        pause: false,
        keyboard: false,
        interval: 3000
    })
    // End Slider

    // Start Shuffle
    activeClassHandeler('.work ul li');

    $('.work ul li').on('click', function () {
        var dataClass = $(this).data('class');

        if (dataClass === 'all') {
            //$('.work .shuffle-images .col-md').css('opacity', '1');
            $('.work .shuffle-images .col-md').fadeTo('slow', 1);
        } else {
            $('.work .shuffle-images .col-md').fadeTo('slow', 0.1);
            $('.work .shuffle-images .col-md ' + dataClass).parent().fadeTo('slow', 1);
        }
    });
    // End Shuffle


});
