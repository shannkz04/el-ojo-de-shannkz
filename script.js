document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");

    // Verificar si el botón existe
    const shareButton = document.getElementById('share-button');
    if (!shareButton) {
        console.log("El botón no existe en el DOM.");
        return;
    }

    shareButton.addEventListener('click', function(e) {
        e.preventDefault();

        console.log("Botón de compartir clickeado");

        // URL de la página que se quiere compartir
        const url = "https://shannkz04.github.io/el-ojo-de-shannkz";

        // Redes sociales a compartir
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; // Facebook
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`; // Twitter
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`; // WhatsApp

        // Verificar las URLs que se están generando
        console.log("URL para compartir en Facebook: ", shareUrl);
        console.log("URL para compartir en Twitter: ", twitterUrl);
        console.log("URL para compartir en WhatsApp: ", whatsappUrl);

        // Abre una nueva ventana para Facebook
        window.open(shareUrl, 'facebook-share', 'width=600,height=400,scrollbars=yes,resizable=yes');

        // Abre una nueva ventana para Twitter
        window.open(twitterUrl, 'twitter-share', 'width=600,height=400,scrollbars=yes,resizable=yes');

        // Abre una nueva ventana para WhatsApp
        window.open(whatsappUrl, 'whatsapp-share', 'width=600,height=400,scrollbars=yes,resizable=yes');
    });
});
