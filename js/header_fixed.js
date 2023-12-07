$(document).ready(function() {
    var infoTopHeight = $('.info-top').outerHeight();
    var header = $('.header');

    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition >= infoTopHeight) {
            header.addClass('fixed');
            $('body').addClass('fixed-header');
        } else {
            header.removeClass('fixed');
            $('body').removeClass('fixed-header');
        }
    });

    // Ajusta el desplazamiento inicial para que el primer scroll encaje con el inicio del header
    $(window).trigger('scroll');
});