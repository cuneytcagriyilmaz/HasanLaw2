/*===============================================

Theme Name: Neete Law HTML Template
Version:1.0
Author: ITCLAN
Description: Neete Law HTML Template

NOTE:
=====
Please DO NOT EDIT THIS JS, you may need to use "custom.js".

===============================================**/

/* JS INDEX
/*==============================================  
    1. Preloader
    2. Search Show Hide 
    3. Scroll  top
    4. Banner Slider
    5. Counter
    6. Testimonila Carousel
    7. Client Carousel
    8. Our professional Carousel
    9. Other attorneys Carousel
    10. Faq
    11. All Background Image
   

/*===============================================**/


(function($) {
    "use strict";


    /*========================================
     1. Preloader
 ========================================*/

    $(window).on('load', function() {
        $("#ic-preloader").fadeOut(500);
    });

    /*=====================================
           2. Search Show Hide 
    =========================================*/

    $('.ic-search-open').on('click', function() {
        $('.ic-nav-search-box').addClass('active');
        $(this).hide();
        $('.ic-search-close').show();
    })
    $('.ic-search-close').on('click', function() {
        $('.ic-nav-search-box').removeClass('active');
        $(this).hide();
        $('.ic-search-open').show();
    })

    /*========================================
        3. Scroll  top
    ========================================*/

    var scrollTop = $('.ic-scroll-top');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            scrollTop.css({
                'bottom': '4%',
                'opacity': '1',
                'transition': 'all .5s ease-in-out'
            });
        } else {
            scrollTop.css({
                'bottom': '-15%',
                'opacity': '0',
                'transition': 'all .5s ease-in-out'
            })
        }
    });
    scrollTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    /*========================================
     4. Banner Slider
  ========================================*/

    $(".ic-banner-carousel").owlCarousel({
        items: 1,
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 0,
        nav: false,
        dots: true,
        dotsData: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,
    });

    $('.owl-dot').on('click', function() {
        $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
        $('.owl-dot').removeClass('active');
        $(this).addClass('active');
    })

    /*========================================
       5. Counter
    ========================================*/

    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            delay: 10,
            time: 1500,
        });
    }

    /*========================================
      6. Testimonila Carousel
    ========================================*/

    $('#ic-testimonial').owlCarousel({
        autoplay: 2000,
        center: true,
        loop: true,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        dots: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2,
                center: false,
            },
            992: {
                items: 3
            }
        }
    });

    /*========================================
         7. Client Carousel
   ========================================*/

    $('.ic-client-carousel').owlCarousel({
        autoplay: 200000,
        loop: true,
        smartSpeed: 1000,
        margin: 20,
        nav: false,
        dots: false,

        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    /*========================================
        8. Our professional Carousel
 ========================================*/

    $(".ic-our-professional-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        dotsData: true,
        smartSpeed: 500,
        autoplay: 600000,
        autoplayTimeout: 700000,

    });

    /*========================================
        9. Other attorneys Carousel
 ========================================*/

    $(".ic-other-attorneys-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        dotsData: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 1
            },
            800: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    /*========================================
        10. Faq
 ========================================*/

    $('.ic-collapse-btn').on('click', function() {
        let isActive = $(this).closest('.card').hasClass('active-card');
        $('.card').removeClass('active-card');
        if (isActive) {
            $(this).closest('.card').addClass('active-card');
        }
        $(this).closest('.card').toggleClass('active-card');

    })

    /*========================================
          11. All Background Image
      ========================================*/

    $("[data-bg]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-bg") + ")")
    });


})(jQuery);