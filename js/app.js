$(document).ready(function () {
    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        // animateOut: "fadeOut",
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                nav: false,
            },
            760: {
                nav: true,
            }
        }
    })

    // PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        // animateOut: "fadeOut",
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            760: {
                items: 2,
                center: true,
            },
            1140: {
                items: 2,
                center: true,
                nav: true,
            },

        }
    })

    // REVIEWS-SLIDER
    $('#reviews-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        items: 1,
        // animateOut: "fadeOut",
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {

            },
            760: {

            },
            1140: {

            },

        }
    })
});