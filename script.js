document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");
    
document.addEventListener("DOMContentLoaded", function() {
    const shareButton = document.getElementById("share-button");
    const shareMenu = document.getElementById("share-menu");

    // URL de la página que se quiere compartir
    const url = "https://shannkz04.github.io/el-ojo-de-shannkz";
    const image = "https://shannkz04.github.io/el-ojo-de-shannkz/prueba.png"; // Imagen para compartir

    shareButton.addEventListener("click", function() {
        shareMenu.style.display = "block";  // Muestra el menú de compartir
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
});
