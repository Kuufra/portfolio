document.addEventListener("DOMContentLoaded", function() {
    var estadoLicuadora = 'apagada';
    var sonidoLicuadora = document.getElementById('blender-sound');
    var sonidoBoton = document.getElementById('blender-button-sound');
    var licuadora = document.getElementById('blender');
    var botonEncendido = document.getElementById("blender-button");

    function controlarLicuadora() {
        if (estadoLicuadora == 'apagada') {
            estadoLicuadora = 'encendido';
            sonido();
            licuadora.classList.add("active");
            console.log("Me Encendiste");
        } else {
            estadoLicuadora = 'apagada';
            sonido();
            licuadora.classList.remove("active");
            console.log("Me Apagaste");
        }
    }

    botonEncendido.onclick = function () {
        controlarLicuadora();
    };

    function sonido() {
        if (sonidoLicuadora.paused) {
            sonidoBoton.play();
            sonidoLicuadora.play();
        } else {
            sonidoBoton.play();
            sonidoLicuadora.pause();
            sonidoLicuadora.currentTime = 0;
        }
    }
});