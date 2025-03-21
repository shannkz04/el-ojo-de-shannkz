document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a nuestra web de proyectos!");
});

// Función para mostrar el PDF online
function mostrarPDF() {
    let contenedor = document.getElementById("visor-pdf-container");
    contenedor.innerHTML = `
        <iframe src="https://cdn.jsdelivr.net/npm/pdf.js@2.11.338/dist/pdf_viewer.html?file=https://raw.githubusercontent.com/shannkz04/el-ojo-de-shannkz/994fec971b406157c7bc21a8b3a1ee42d22f801a/KusoMagi%20TOMO%201.pdf"
        style="width:100%; height:600px;" frameborder="0"></iframe>
    `;
}
