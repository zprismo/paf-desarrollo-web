$(document).ready(function () {
    var currentIndex = 0;
    var slides = $('.clientes-slide');
    var totalSlides = slides.length;
    var slidesToShow = 4;

    $('.clientes-next').on('click', function () {
        if (currentIndex < totalSlides - slidesToShow) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    $('.clientes-prev').on('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - slidesToShow;
        }
        updateSlider();
    });

    function updateSlider() {
        var translateValue = -currentIndex * (100 / slidesToShow) + '%';
        $('.clientes-slider-wrapper').css('transform', 'translateX(' + translateValue + ')');
    }

    // Agregar el siguiente código para el bucle infinito
    setInterval(function () {
        if (currentIndex < totalSlides - slidesToShow) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 3000); // Ajusta el intervalo de cambio según sea necesario (en milisegundos)
});