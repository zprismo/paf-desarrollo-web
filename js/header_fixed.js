$(document).ready(function() {
    var infoTopHeight = $('.info-top').outerHeight();
    var header = $('header');
    var menu = $('.menu');

    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition >= infoTopHeight) {
            header.addClass('fixed');
            menu.addClass('menu-fill');
            $('body').addClass('fixed-header');
        } else {
            header.removeClass('fixed');
            menu.removeClass('menu-fill');
            $('body').removeClass('fixed-header');
        }


    });

    $(window).trigger('scroll');
    console.log('wtftftftft')
});