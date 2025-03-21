document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a nuestra web de proyectos!");
});
function mostrarPDF() {
    let visor = document.getElementById('visor-pdf');

    if (!visor) {
        visor = document.createElement('iframe');
        visor.id = 'visor-pdf';
        visor.style.width = '100%';
        visor.style.height = '600px';
        visor.style.border = 'none';
        document.querySelector('.descargas').appendChild(visor);
    }

    visor.src = "https://docs.google.com/viewer?url=" + 
        encodeURIComponent("https://raw.githubusercontent.com/shannkz04/el-ojo-de-shannkz/994fec971b406157c7bc21a8b3a1ee42d22f801a/KusoMagi%20TOMO%201.pdf") + "&embedded=true";
}
