document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");
   
    const shareButton = document.getElementById("share-button");
    const shareMenu = document.getElementById("share-menu");

    // URL de la página que se quiere compartir
    const url = "https://shannkz04.github.io/el-ojo-de-shannkz";
    const image = "https://shannkz04.github.io/el-ojo-de-shannkz/prueba.png"; // Imagen para compartir

    // Alternar visibilidad del menú de compartir
    shareButton.addEventListener("click", function(event) {
        // Prevenir que el clic en el botón de compartir cierre el menú inmediatamente
        event.stopPropagation();

        // Si el menú está visible, lo ocultamos, si está oculto lo mostramos
        if (shareMenu.style.display === "block") {
            shareMenu.style.display = "none"; // Cierra el menú si está abierto
        } else {
            shareMenu.style.display = "block";  // Muestra el menú si está cerrado
        }
    });

    // Funciones para compartir en redes sociales
    document.getElementById("facebook-share").addEventListener("click", function() {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
    });

    document.getElementById("twitter-share").addEventListener("click", function() {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=¡Descubre El Ojo de Shannkz!`, '_blank', 'width=600,height=400');
    });

    document.getElementById("whatsapp-share").addEventListener("click", function() {
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
    });

    document.getElementById("copy-link").addEventListener("click", function() {
        navigator.clipboard.writeText(url).then(() => {
            alert("Enlace copiado al portapapeles!");
        });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        // Si el clic es fuera del botón de compartir y fuera del menú
        if (!shareButton.contains(event.target) && !shareMenu.contains(event.target)) {
            shareMenu.style.display = "none"; // Cierra el menú
        }
    });
});
