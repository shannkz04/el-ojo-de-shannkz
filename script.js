document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a nuestra web de proyectos!");
});

function mostrarPDF() {
    let container = document.getElementById('visor-pdf-container');

    // Si ya existe el visor, no lo duplicamos
    if (!document.getElementById('visor-pdf')) {
        let iframe = document.createElement('iframe');
        iframe.id = 'visor-pdf';
        iframe.src = "https://docs.google.com/gview?url=https://raw.githubusercontent.com/shannkz04/el-ojo-de-shannkz/KusoMagi TOMO 1.pdf";
        iframe.style.width = "100%";
        iframe.style.height = "600px";
        iframe.style.border = "none";

        container.appendChild(iframe);
    }
}
