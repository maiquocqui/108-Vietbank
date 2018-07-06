(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

;
$(document).ready(function () {
    $('header').scrollToFixed();
    $('.bancan-step').scrollToFixed({
        marginTop: $('header').outerHeight(true),
        zIndex: 99
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.up').fadeIn(300);
        } else {
            $('.up').fadeOut(300);
        }
    });

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 300,
        mobile: false,
        live: true
    });
    wow.init();

    if ($(window).width() >= 1200) {
        $('.dropdown').mouseover(function () {
            $(this).addClass("open");
        }).mouseout(function () {
            $(this).removeClass("open");
        });
    }

    $('.menu-content ul > li > a').removeAttr("data-toggle");

    $(document).on('click', '#main-nav > li.dropdown > a > .caret', function (e) {
        $(this).parent().parent().toggleClass('open');
        return false;
    });

    $(document).on('click', '#main-nav > li.dropdown > ul.dropdown-menu > li.dropdown > a > .caret', function (e) {
        $(this).parent().parent().toggleClass('open');
        return false;
    });

    $('.toggle-click').click(function () {
        /* Act on the event */
        $('.nav-toogle').toggleClass('show');
    });

    if ($(window).width() <= 1199) {
        $('.menu-content ul > li > a .caret').click(function () {
            var _parent = $(this).parent();
            if (_parent.hasClass('expand')) {
                _parent.removeClass('expand');
            } else {
                $('.menu-content ul > li > a').removeClass('expand');
                _parent.addClass('expand');
            }
        });
    }

    $('.up').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });
    $('a[data-tel]').each(function () {
        $(this).prop('href', 'tel:' + $(this).data('tel'));
    });

    $('.banner').owlCarousel({
        items: 1,
        margin: 0,
        stagePadding: 0,
        smartSpeed: 500,
        loop: false,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000
    });
    $('.service').owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 3
            }
        },
        margin: 5,
        stagePadding: 0,
        smartSpeed: 500,
        loop: false,
        nav: true,
        dots: true
    });
    $('.promotion').owlCarousel({
        items: 1,
        margin: 0,
        stagePadding: 0,
        smartSpeed: 500,
        loop: false,
        nav: true,
        dots: false
    });
    $('.support').owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        },
        margin: 30,
        stagePadding: 0,
        smartSpeed: 800,
        loop: false,
        nav: true,
        dots: false
    });
    $('.btn-showmenu').click(function () {
        $('.main-menu').addClass('open');
        $('.overlay').fadeIn(300);
    });
    $('.btn-closemenu').click(function () {
        $('.main-menu').removeClass('open');
        $('.overlay').fadeOut(300);
    });
    $('.overlay').click(function () {
        $('.main-menu').removeClass('open');
        $(this).fadeOut(300);
    });

    $('.panel .title').click(function (e) {
        e.preventDefault();
        var _parent = $(this).parent();
        if (_parent.hasClass('active')) {
            _parent.removeClass('active');
            _parent.find('.content').slideUp();
        } else {
            $('.panel').removeClass('active');
            // $('.content').slideUp();
            _parent.addClass('active');
            _parent.find('.content').slideDown();
            $('html,body').animate({
                scrollTop: $(this).offset().top - 115
            }, 400);
        }
    });

    if ($('.panel').length) {
        $('.panel').eq(1).find('.title').trigger('click');
        if ($('.panel').length) {
            $('.panel.active.active').trigger('click');
        } else {
            $('.panel').eq(1).find('.title').trigger('click');
        }
    }

    //FAQs
    $('.panel-faqs .title').click(function (e) {
        e.preventDefault();
        var _parent = $(this).parent();
        if (_parent.hasClass('active')) {
            _parent.removeClass('active');
            _parent.find('.content').slideUp();
        } else {
            $('.panel-faqs').removeClass('active');
            // $('.content').slideUp();
            _parent.addClass('active');
            _parent.find('.content').slideDown();
        }
    });

    if ($('.panel-faqs').length) {
        $('.panel-faqs').eq(0).find('.title').trigger('click');
        if ($('.panel-faqs').length) {
            $('.panel-faqs.active.active').trigger('click');
        } else {
            $('.panel-faqs').eq(1).find('.title').trigger('click');
        }
    }

    $('ul.left-menusp li.has-children > a').click(function () {
        $(this).parent().siblings().find('ul.sub-menu').slideUp(300);
        $(this).next('ul.sub-menu').stop(true, false, true).slideToggle(300);
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $('ul.left-menusp li.has-children').removeClass('active');
            $(this).parent().addClass('active');
        }
        return false;
    });

    $('.news-special .owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        smartSpeed: 500,
        loop: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navRewind: true,
        slideBy: 1,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });

    //Click Scroll To
    $('.bancan-step a[href^="#"]').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 140
        }, 700);
        $('.bancan-step a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    //
    $("#next.btn-more").click(function () {
        var slideProfile = $(".profile-copy");
        $.each($(".profile-copy .truncate"), function (i, e) {
            if ($(e).hasClass('show') && i < $(".profile-copy .truncate").length - 1) {
                $(".profile-copy .show").removeClass('show');
                $(".profile-copy .truncate").eq(i + 1).addClass('show');
                var heightN = $(".profile-copy .truncate").eq(i + 1).height();
                slideProfile.css('top', -heightN);
                if (i == $(".profile-copy .truncate").length - 2) {
                    $("#next.btn-more").addClass('mclose');
                    $("#back.btn-more").removeClass('mclose');
                }
                return false;
            }
        });
    });
    $("#back.btn-more").click(function () {
        var slideProfile = $(".profile-copy");
        $.each($(".profile-copy .truncate"), function (i, e) {
            if ($(e).hasClass('show') && i > 0) {
                $(".profile-copy .show").removeClass('show');
                $(".profile-copy .truncate").eq(i - 1).addClass('show');
                var heightB = $(".profile-copy .truncate").eq(i - 1).height();
                slideProfile.css('top', -heightB);
                if (i == 1) {
                    slideProfile.css('top', 0);
                    $("#next.btn-more").removeClass('mclose');
                    $("#back.btn-more").addClass('mclose');
                }
                return false;
            }
        });
    });
});

},{}]},{},[1])


//# sourceMappingURL=main.js.map
