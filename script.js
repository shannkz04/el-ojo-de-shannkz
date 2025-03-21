          document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");

    document.getElementById('share-button').addEventListener('click', function(e) {
        e.preventDefault();

        // URL de la página que se quiere compartir
        const url = https://shannkz04.github.io/el-ojo-de-shannkz

        // Redes sociales a compartir
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; // Facebook
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`; // Twitter
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`; // WhatsApp

        // Abre una nueva ventana para Facebook
        window.open(shareUrl, 'facebook-share', 'width=600,height=400,scrollbars=yes,resizable=yes');

        // Abre una nueva ventana para Twitter
        window.open(twitterUrl, 'twitter-share', 'width=600,height=400,scrollbars=yes,resizable=yes');

        // Abre una nueva ventana para WhatsApp
        window.open(whatsappUrl, 'whatsapp-share', 'width=600,height=400,scrollbars=yes,resizable=yes');
    });
});
