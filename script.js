document.addEventListener("DOMContentLoaded", function() {
    const shareButton = document.getElementById('share-button');
    const shareMenu = document.getElementById('share-menu');
    const url = 'https://shannkz04.github.io/el-ojo-de-shannkz'; // La URL que deseas compartir

    // Mostrar el menú de compartir
    shareButton.addEventListener('click', function() {
        shareMenu.style.display = 'block'; // Mostrar el menú
    });

    // Función para compartir en Facebook
    document.getElementById('facebook-share').addEventListener('click', function(e) {
        e.preventDefault();
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookUrl, 'facebook-share', 'width=600,height=400,scrollbars=yes,resizable=yes');
        shareMenu.style.display = 'none'; // Cerrar el menú
    });

    // Función para compartir en Twitter
    document.getElementById('twitter-share').addEventListener('click', function(e) {
        e.preventDefault();
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, 'twitter-share', 'width=600,height=400,scrollbars=yes,resizable=yes');
        shareMenu.style.display = 'none'; // Cerrar el menú
    });

    // Función para compartir en WhatsApp
    document.getElementById('whatsapp-share').addEventListener('click', function(e) {
        e.preventDefault();
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
        window.open(whatsappUrl, 'whatsapp-share', 'width=600,height=400,scrollbars=yes,resizable=yes');
        shareMenu.style.display = 'none'; // Cerrar el menú
    });

    // Función para copiar el enlace al portapapeles
    document.getElementById('copy-link').addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText(url).then(function() {
            alert('Enlace copiado al portapapeles');
        }, function(err) {
            console.error('Error al copiar al portapapeles: ', err);
        });
        shareMenu.style.display = 'none'; // Cerrar el menú
    });
});
