(function ($) {
    "use strict"; // Start of use strict

    /*---------------------------------
    Preloader Script
    ----------------------------------*/
    $(window).on('load', function () {
        $('#preloader-status').fadeOut();
        $('#preloader')
            .delay(350)
            .fadeOut('slow');
        $('body')
            .delay(350)
    });
    /*---------------------------------
    Preloader Script
    ----------------------------------*/

    /*---------------------------------
    Wow JS Init
    ----------------------------------*/
    new WOW().init();
    /*---------------------------------
    Wow JS Init
    ----------------------------------*/

    /*---------------------------------
    Sticky Menu Script
    ----------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });
    /*---------------------------------
    Sticky Menu Script
    ----------------------------------*/

    /*---------------------------------
    Button Hover Effect Script
    ----------------------------------*/
    $(".theme-btn").mouseenter(function (e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".theme-btn-circle").css({ left: relX, top: relY });
        $(this).prev(".theme-btn-circle").removeClass("desplode-circle");
        $(this).prev(".theme-btn-circle").addClass("explode-circle");
    });

    $(".theme-btn").mouseleave(function (e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".theme-btn-circle").css({ left: relX, top: relY });
        $(this).prev(".theme-btn-circle").removeClass("explode-circle");
        $(this).prev(".theme-btn-circle").addClass("desplode-circle");
    });

    /*---------------------------------
    Button Hover Effect Script
    ----------------------------------*/

    /*---------------------------------
    Brand Logo Slider
    ----------------------------------*/
    $('.brand-carousel-1').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 5,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 3000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    })
    /*---------------------------------
    Customer Testimonial JS
    ----------------------------------*/
    $('.customer-testimonial-slider').owlCarousel({
        items: 1,
        loop: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayTimeout: 1500,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            '<i class="far fa-arrow-left testimonial-arrow"></i>',
            '<i class="far fa-arrow-right testimonial-arrow"></i>',
        ],
        smartSpeed: 3000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1
            },
            991: {
                items: 1
            },
            1199: {
                items: 1
            },
            1200: {
                items: 1
            }
        },

    });

    /*---------------------------------
    Scroll to top
    ----------------------------------*/
    $('#scrollToTop').on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 800);
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });
    /*---------------------------------
    Scroll to top
    ----------------------------------*/

    /*---------------------------------
    Scroll to Down
    ----------------------------------*/
    // testimonialArea Scroll
    $('#testimonialArea a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 120
        }, 500, 'linear');
    });

    // portfolioDetailsOverview
    $('#portfolioDetailsOverview a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500, 'linear');
    });
    /*---------------------------------
    Scroll to Down
    ----------------------------------*/

    /*---------------------------------
    Lenis Smooth Scroll
    ----------------------------------*/
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    /*---------------------------------
    Lenis Smooth Scroll
    ----------------------------------*/

    /*---------------------------------
    Service Details Slider
    ----------------------------------*/
    $('.service-details-slider').owlCarousel({
        items: 1,
        loop: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayTimeout: 1500,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            '<i class="far fa-arrow-left testimonial-arrow"></i>',
            '<i class="far fa-arrow-right testimonial-arrow"></i>',
        ],
        smartSpeed: 3000,
        autoplayTimeout: 3000,
    });
    /*---------------------------------
    Service Details Slider
    ----------------------------------*/

    /*---------------------------------
    Portfolio Details Slider
    ----------------------------------*/
    var owl = $('.portfolio-details-slider-area');
    owl.owlCarousel({
        items: 2,
        loop: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayTimeout: 1500,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 3000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            767: {
                items: 2
            },
            991: {
                items: 2
            },
            1199: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // Custom Navigation Events
    $('.custom-next').click(function () {
        owl.trigger('next.owl.carousel', [3000]);
    });
    $('.custom-prev').click(function () {
        owl.trigger('prev.owl.carousel', [3000]);
    });

    // Add 'disabled' class to custom nav buttons when reaching first or last item
    owl.on('changed.owl.carousel', function (event) {
        var itemCount = event.item.count; // Total items
        var currentItem = event.item.index; // Current item index

        if (currentItem === 0) {
            $('.custom-prev').addClass('disabled');
        } else {
            $('.custom-prev').removeClass('disabled');
        }

        if (currentItem === itemCount - event.page.size) {
            $('.custom-next').addClass('disabled');
        } else {
            $('.custom-next').removeClass('disabled');
        }
    });

    // Initial check for 'disabled' class
    owl.on('initialized.owl.carousel', function (event) {
        var itemCount = event.item.count;
        if (event.item.index === 0) {
            $('.custom-prev').addClass('disabled');
        }
        if (itemCount <= event.page.size) {
            $('.custom-next').addClass('disabled');
        }
    });

    /*---------------------------------
    Portfolio Details Slider
    ----------------------------------*/

})(jQuery); // End of use strict
