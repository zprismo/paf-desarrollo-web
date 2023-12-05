$(document).ready(function() {
    var contadorPaises = 1;
    var contadorClientes = 1;
    let contadorPersonasBeneficiadas = 1;

    var intervalPaises;
    var intervalClientes;
    var intervalPersonasBeneficiadas;

    var contadorVisible = false;

    function actualizarContadorPaises() {
        if (contadorPaises < 11) {
            contadorPaises++;
            $('#contadorPaises').text(contadorPaises);
        } else {
            clearInterval(intervalPaises);
        }
    }

    function actualizarContadorClientes() {
        if (contadorClientes < 50) {
            contadorClientes++;
            $('#contadorClientes').text(contadorClientes);
        } else {
            clearInterval(intervalClientes);
        }
    }

    function actualizarContadorPersonasBeneficiadas() {
        if (contadorPersonasBeneficiadas < 150) {
            contadorPersonasBeneficiadas++;
            $('#contadorPersonasBeneficiadas').text(contadorPersonasBeneficiadas);
        } else {
            clearInterval(intervalPersonasBeneficiadas);
        }
    }

    $(window).on('scroll', function() {
        // Verificar si el elemento es visible en la ventana
        var contadorElement = $('#contadorPaises');
        var elementTop = contadorElement.offset().top;
        var elementBottom = elementTop + contadorElement.outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom && !contadorVisible) {
            // El elemento es visible, comenzar el contador
            contadorVisible = true;
            setTimeout(function() {
                intervalPaises = setInterval(actualizarContadorPaises, 100);
            }, 250);

            setTimeout(function() {
                intervalClientes = setInterval(actualizarContadorClientes, 40);
            }, 250);

            setTimeout(function() {
                intervalPersonasBeneficiadas = setInterval(actualizarContadorPersonasBeneficiadas, 20);
            }, 250);
        }
    });
});