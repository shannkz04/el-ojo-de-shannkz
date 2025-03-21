document.addEventListener("DOMContentLoaded", function() {
    console.log("El documento ha sido cargado completamente");

    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");

    const shareButton = document.getElementById('share-button');
    if (!shareButton) {
        console.log("El botón no está en el DOM.");
        return;
    }

    shareButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("Botón de compartir clickeado");

        const url = "https://shannkz04.github.io/el-ojo-de-shannkz"; // Asegúrate de que esta URL esté correcta
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; 
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`; 
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`; 

        console.log("URL para compartir en Facebook: ", shareUrl);
        console.log("URL para compartir en Twitter: ", twitterUrl);
        console.log("URL para compartir en WhatsApp: ", whatsappUrl);

        // Abrir las ventanas emergentes
        window.open(shareUrl, 'facebook-share', 'width=600,height=400,scrollbars=yes,resizable=yes');
        window.open(twitterUrl, 'twitter-share', 'width=600,height=400,scrollbars=yes,resizable=yes');
        window.open(whatsappUrl, 'whatsapp-share', 'width=600,height=400,scrollbars=yes,resizable=yes');
    });
});
