/*global $, window*/
$(function () {
    'use strict';
    // start Navbar
    $('.nav-item').each(function () {
        $(this).click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });
    // End Navbar

    // Start Slider
    function adjustSliderHieght() {
        var winH = $(window).height(),
            upperH = $('.upper-bar').innerHeight(),
            navH = $('.navbar').innerHeight();
        $('.slider, .carousel-item').height(winH - (upperH + navH));
    }
    adjustSliderHieght();

    // End Slider
});
