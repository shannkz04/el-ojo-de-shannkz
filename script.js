document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a nuestra web de proyectos!");
});

function mostrarPDF() {
    let contenedor = document.getElementById("visor-pdf-container");
    contenedor.innerHTML = `
        <iframe src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/shannkz04/el-ojo-de-shannkz/994fec971b406157c7bc21a8b3a1ee42d22f801a/KusoMagi%20TOMO%201.pdf&embedded=true"
        style="width:100%; height:600px;" frameborder="0"></iframe>
    `;
}
