document.addEventListener("DOMContentLoaded", function() {
    // Mostrar un mensaje de bienvenida
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");

    const shareButton = document.getElementById("share-button");
    const shareMenu = document.getElementById("share-menu");
    const body = document.body;

    // URL de la página que se quiere compartir
    const url = "https://shannkz04.github.io/el-ojo-de-shannkz";
    const image = "https://shannkz04.github.io/el-ojo-de-shannkz/prueba.png"; // Imagen para compartir

    // Mostrar u ocultar el menú de compartir al hacer clic en el botón
    shareButton.addEventListener("click", function(event) {
        event.stopPropagation();  // Evita que el clic cierre el menú
        shareMenu.style.display = (shareMenu.style.display === "block") ? "none" : "block";
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

    // Cerrar el menú si se hace clic en cualquier lugar fuera del menú de compartir
    body.addEventListener("click", function() {
        shareMenu.style.display = "none";
    });

    // Evitar que el clic en el menú de compartir cierre el menú
    shareMenu.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
