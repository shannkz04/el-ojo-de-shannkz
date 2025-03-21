document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a nuestra web de proyectos!");
});

function mostrarPDF() {
    let contenedor = document.getElementById("visor-pdf-container");
    const url = "https://raw.githubusercontent.com/shannkz04/el-ojo-de-shannkz/994fec971b406157c7bc21a8b3a1ee42d22f801a/KusoMagi%20TOMO%201.pdf";

    // Limpiamos el contenedor
    contenedor.innerHTML = "";

    // Crear un canvas para mostrar el PDF
    let canvas = document.createElement('canvas');
    contenedor.appendChild(canvas);

    // Cargar el PDF con PDF.js
    pdfjsLib.getDocument(url).promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            let viewport = page.getViewport({ scale: 1 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            let context = canvas.getContext('2d');
            page.render({
                canvasContext: context,
                viewport: viewport
            });
        });
    }).catch(function(error) {
        console.log("Error al cargar el PDF: ", error);
    });
}
