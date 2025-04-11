
 (function($) {

    "use strict";

    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        $('.ic-navbar-toggler').on('click', function () {
            $('html').addClass('ic-expand');
        });
        $('.ic-nav-close-btn, .ic-nav-bg').on('click', function () {
            $('html').removeClass('ic-expand');
        });
    }
    $('.ic-nav-ul').before('<button class="ic-nav-close-btn"><i class="icofont-close-line"></i> </button>');

    toggleMobileNavigation();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var subUl = $('.ic-dropdown-li-nav.ic-sort-screen ul');
        var subUlLink = $('.ic-dropdown-li-nav.ic-sort-screen>a');

        if (windowWidth <= 1199) {
            subUl.hide();
            subUlLink.on('click', function (e) {
               
                $(this).siblings().slideToggle();
                $(this).parent().toggleClass('ic-active');
                e.preventDefault();
                e.stopImmediatePropagation();
            });
        }
        else if (windowWidth > 1199) {
            subUl.show();
        }
    }

    smallNavFunctionality();

    
    // Navbar fixed when scroll
    function navFixedScroll(){
        var windows = $(window);
        var headerHeight = $("#ic-header").height();
        var scrollTop = windows.scrollTop();
        if (windows.width() > 1200 ) {
            if (windows.scrollTop() > headerHeight) {
                $('body').addClass('ic-nav-fix');
            } else {
                $('body').removeClass('ic-nav-fix');
            }
        }
    }


    /*------------------------------------------
        = SCROLL TO TOP
    -------------------------------------------*/
    function scrollToTop(){
        if ($(window).scrollTop() >= 450) {
            $('#ic-scroll-top').addClass('active');
        } else {
            $('#ic-scroll-top').removeClass('active');
        }
    }
    
    $(document).on("click", "a[href='#body']", function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });


    /*------------------------------------------
        = HEADER SEARCH AREA
    -------------------------------------------*/
    if($('.ic-nav-search').length){
        var searchBox = $('.ic-nav-search');
        var searchBtn = $('.ic-icon-search');

        searchBtn.on('click', function(e){
            e.stopPropagation();
            $('.ic-icon-search').children('i').toggleClass('icofont-close icofont-search-1');
            searchBox.toggleClass('active');
        });
        $(document).on('click', function(){
            searchBox.removeClass('active');
            $('.ic-icon-search').children('i').removeClass('icofont-close').addClass('icofont-search-1');
        }).find(searchBox).on("click", function(e) {
            e.stopPropagation();
        });
    }

    /*------------------------------------------
        = HOME BANNER SLIDER
    -------------------------------------------*/
    if($('#ic-slider').length){
        $('#ic-slider').slick({
            dots: true,
            infinite: true,
            speed: 700,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: false,
            cssEase: 'ease-out',
            arrows: true,
            prevArrow: '<div class="slick-prev-div"><i class="icofont-block-left"></i></div>',
            nextArrow: '<div class="slick-next-div"><i class="icofont-block-right"></i></div>',
        });
    }
     
    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500);
        }
    }

    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({});

    //active wow
    wow.init();
    
    /*------------------------------------------
        = ACCORDION 
    -------------------------------------------*/
    $('.ic-find-answer-content .ic-accordion .card:nth-of-type(1)').addClass('header-s');
    var collapse = $('.collapse');
    if($('.card').length){
        collapse.on('show.bs.collapse', function () {
            $(this).closest('.card').addClass('header-s');
        });
        collapse.on('hide.bs.collapse', function () {
            $(this).closest('.card').removeClass('header-s');
        });
    }

    /*------------------------------------------
        = SIDENAV NAVIGATION DROPDOWN
    -------------------------------------------*/
    $('.ic-dropdown-li>a').on('click', function () {
        $(this).siblings('ul').slideToggle();
        return false;
    });

    /*------------------------------------------
        = FEEDBACK SLIDER
    -------------------------------------------*/
    if ($('.ic-feedback-slider').length) {
        $('.ic-feedback-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: '0px',
            cssEase: 'ease-out',
            arrows: false,
            dots: true,
            speed: 1000,
            infinite: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ],
        });
    }

    /*------------------------------------------
        = CLIENTS SLIDER
    -------------------------------------------*/
    if ($('.ic-clients-slider').length) {
        $('.ic-clients-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            centerPadding: '0px',
            cssEase: 'ease-out',
            arrows: false,
            dots: false,
            speed: 1000,
            infinite: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 775,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 430,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ],
        });
    }


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function() {

        preloader();

        toggleMobileNavigation();

        smallNavFunctionality();
    });


    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

        scrollToTop();

        navFixedScroll();

    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {

        smallNavFunctionality();

        navFixedScroll();

        toggleMobileNavigation();

    });


})(window.jQuery);