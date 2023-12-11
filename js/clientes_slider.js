$(document).ready(function () {
    var currentIndex = 0;
    var slides = $('.clientes-slide');
    var totalSlides = slides.length;
    // var slidesToShow = $(window).width() === 390 ? 1 : 4;

    function calcularSlidesToShow() {
        return $(window).width() <= 768 ? 1 : 4;
    }

    var slidesToShow = calcularSlidesToShow();

    let click = false;

    $('.clientes-next').on('click', function () {
        if (currentIndex < totalSlides - slidesToShow) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
        click = true;
    });

    $('.clientes-prev').on('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - slidesToShow;
        }
        updateSlider();
        click = true;
    });

    function updateSlider() {
        var translateValue = -currentIndex * (100 / slidesToShow) + '%';
        $('.clientes-slider-wrapper').css('transform', 'translateX(' + translateValue + ')');
    }

    $(window).on('resize', function () {
        // Actualizar slidesToShow solo si ha cambiado
        var newSlidesToShow = calcularSlidesToShow();
        if (newSlidesToShow !== slidesToShow) {
            slidesToShow = newSlidesToShow;
            updateSlider();
        }
    });

    setInterval(function () {
        if(!click) {
            if (currentIndex < totalSlides - slidesToShow) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        }
        updateSlider();
    }, 2000);
});