$(document).ready(function () {
    let currentIndex = 0;
    let slides = $('.slide');
    let totalSlides = slides.length;
    let progressBar = $('.slider-progress-bar');
    let intervalDuration = 5000;
    let interval;

    $('.next-slider').on('click', function () {
        clearInterval(interval);
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
        startProgressBar();
    });

    $('.prev-slider').on('click', function () {
        clearInterval(interval);
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateSlider();
        startProgressBar();
    });

    function updateSlider() {
        let translateValue = -currentIndex * 100 + '%';
        $('.slider-wrapper').css('transform', 'translateX(' + translateValue + ')');

        setTimeout(function () {
            $('.aux').eq(currentIndex).addClass('show');
        }, 500);

        $('.aux').not(':eq(' + currentIndex + ')').removeClass('show');
    }

    function startProgressBar() {
        progressBar.width(0);
        let step = 100 / (intervalDuration / 100);
        let width = 0;

        interval = setInterval(function () {
            width += step;
            progressBar.width(width + '%');

            if (width >= 100) {
                clearInterval(interval);
                goToNextSlide(); // Cambia al siguiente slide al completarse la barra de progreso
                startProgressBar(); // Reinicia la barra de progreso para el siguiente slide
            }
        }, 100);
    }

    function goToNextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    $('.aux').eq(currentIndex).addClass('show');
    startProgressBar();
});