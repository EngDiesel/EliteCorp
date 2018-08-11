/*global $*/
$(function () {
    'use strict';
    // start Navbar
    $('.nav-item').each(function () {
        $(this).click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });


    // End Navbar
});
