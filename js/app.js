/*global $, window*/
$(function () {
    'use strict';

    // Start smooth scroll 
    var scrollLink = $('.scrollLink');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 25
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 80;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })



    // Trigger Nice Scroll
    $('body').niceScroll({
        cursorcolor: '#ff3120',
        cursoropacitymax: 0.6,
        cursorborder: 'none',
        cursorborderradius: '5px',
        zindex: 99
    });

    // Start Global
    function activeClassHandeler(className) {
        $(className).each(function () {
            $(this).click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    }

    function countEffect(selector) {
        $(selector).each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    //    function isScrolledIntoView(elem) {
    //        var docViewTop = $(window).scrollTop(),
    //            docViewBottom = docViewTop + $(window).height(),
    //            elemTop = $(elem).offset().top,
    //            elemBottom = elemTop + $(elem).height();
    //
    //        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    //    }



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
    });
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
    // Start Statistics Typing effect.
    // ======> Start: is Element in view ?
    function Utils() {

    }

    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop(),
                pageBottom = pageTop + $(window).height(),
                elementTop = $(element).offset().top,
                elementBottom = elementTop + $(element).height();

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };

    Utils = new Utils();
    // ======> End: is Element in view ?

    // ======> Start: trigger on scroll 
    $(window).on('scroll', function () {
        var isElementInView = Utils.isElementInView($('#statistics'), false);
        if (isElementInView) {
            countEffect('.count');
            $(window).off('scroll');
        }
    });
    // ======> End: trigger on scroll 
    // End Statistics Typing effect.

    // start test
    var headeroptions = {
            strings: ["Welcome, we are <span>glad</span> <br>for your visit",
                  "We're an Independent <br>Design and <span>Development</span><br> Agency.",
                  "<span>Let's take a tour<span> <i class='fab fa-angellist'></i>"],
            typeSpeed: 40,
            showCursor: false,
            backDelay: 1800
        },
        coolOptions = {
            strings: [" You think we're cool, let's work together."],
            typeSpeed: 40,
            showCursor: false,
            backDelay: 1800,
            loop: true
        },
        qouteOptions = {
            strings: ["oat cake chocolate. Tiramisu soufflé wafer. Fruitcake sweet pudding biscuit dessert tootsie roll dragée brownie. Jelly-o cake marzipan gummi bears marshmallow", "lemon drops apple pie dessert oat cake chocolate. Tiramisu soufflé wafer. Fruitcake sweet pudding biscuit dessert tootsie roll dragée brownie. Jelly-o cake marzipan gummi bears marshmallow", "Tiramisu macaroon dragée lemon drops apple pie dessert oat cake chocolate. Tiramisu soufflé wafer. Fruitcake sweet pudding biscuit dessert tootsie roll dragée brownie. Jelly-o cake marzipan gummi bears marshmallow"],
            typeSpeed: 40,
            showCursor: false,
            backDelay: 1800,
            loop: true
        },
        typedHeader = new Typed(".main-header", headeroptions),
        typedCool = new Typed("#weAreCool", coolOptions),
        typedQuotes = new Typed('#qouteMostafa', qouteOptions),
        typedQuotes = new Typed('#qouteAssem', qouteOptions),
        typedQuotes = new Typed('#qouteMoataz', qouteOptions);
    // End test

});
