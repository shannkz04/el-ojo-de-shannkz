document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a nuestra web de proyectos!");
});

function mostrarPDF() {
    let container = document.getElementById('visor-pdf-container');

    // Si el visor ya está creado, no lo duplicamos
    if (!document.getElementById('visor-pdf')) {
        let iframe = document.createElement('iframe');
        iframe.id = 'visor-pdf';
        iframe.src = "https://raw.githubusercontent.com/shannkz04/el-ojo-de-shannkz/994fec971b406157c7bc21a8b3a1ee42d22f801a/KusoMagi%20TOMO%201.pdf";
        iframe.style.width = "100%";
        iframe.style.height = "600px";
        iframe.style.border = "none";

        container.appendChild(iframe);
    }
}
