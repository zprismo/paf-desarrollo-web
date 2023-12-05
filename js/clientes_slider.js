$(document).ready(function () {
    var currentIndex = 0;
    var slides = $('.clientes-slide');
    var totalSlides = slides.length;
    var slidesToShow = 4;

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