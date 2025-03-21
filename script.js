document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a nuestra web de proyectos!");
});
function mostrarPDF(pdfUrl) {
    // Cambia el src del iframe para mostrar el PDF
    document.getElementById('pdfViewer').src = pdfUrl;
}
function mostrarPDF(ruta) {
    let visor = document.getElementById('visor-pdf');
    if (!visor) {
        // Si no existe el visor, lo creamos
        visor = document.createElement('iframe');
        visor.id = 'visor-pdf';
        visor.style.width = '100%';
        visor.style.height = '600px';
        visor.style.border = 'none';
        document.querySelector('.descargas').appendChild(visor);
    }
    // Mostrar el PDF en el visor
    visor.src = ruta;
}
