document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a nuestra web de proyectos!");
});
function mostrarPDF(pdfUrl) {
    // Cambia el src del iframe para mostrar el PDF
    document.getElementById('pdfViewer').src = pdfUrl;
}
