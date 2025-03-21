document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");
    
    const shareButton = document.getElementById("share-button");
    const shareMenu = document.getElementById("share-menu");

    // Asegurar que el menú esté oculto al inicio
    shareMenu.classList.remove("active");

    // Mostrar u ocultar el menú al hacer clic en el botón de compartir
    shareButton.addEventListener("click", function(event) {
        event.preventDefault();
        shareMenu.classList.toggle("active");
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        if (!shareButton.contains(event.target) && !shareMenu.contains(event.target)) {
            shareMenu.classList.remove("active");
        }
    });

    // --- FUNCIÓN PARA COMPARTIR EN REDES SOCIALES ---
    function compartirEnRedes(red) {
        let url = encodeURIComponent(window.location.href);
        let text = encodeURIComponent("¡Mira este increíble contenido de Kusomagi!");

        let shareUrl = "";

        switch (red) {
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case "whatsapp":
                shareUrl = `https://api.whatsapp.com/send?text=${text} ${url}`;
                break;
            case "telegram":
                shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
                break;
            default:
                console.warn("Red no reconocida.");
                return;
        }

        window.open(shareUrl, "_blank");
    }

    // Agregar eventos a los botones de compartir
    document.querySelectorAll("#share-menu a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let red = this.dataset.red; // Obtenemos la red social desde data-red
            compartirEnRedes(red);
        });
    });
});
