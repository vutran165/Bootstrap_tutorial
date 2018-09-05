(function ($) {
    "use strict";

    // pre-loader
  

    //home slider & courses & clients

    $('.home-slider').owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        dots: false,
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 1000
    })

    $('.owl-courses').owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        dots: false,
        autoplayHoverPause: false,
        smartSpeed: 1000,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 3,
            }
        }

    })

})(jQuery);