document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");
    
    const shareButton = document.getElementById("share-button");
    const shareMenu = document.getElementById("share-menu");

    // Asegurar que el menú esté oculto al inicio
    shareMenu.classList.add("hidden");

    // Mostrar u ocultar el menú al hacer clic en el botón de compartir
    shareButton.addEventListener("click", function (event) {
        event.preventDefault();
        shareMenu.classList.toggle("hidden");
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!shareButton.contains(event.target) && !shareMenu.contains(event.target)) {
            shareMenu.classList.add("hidden");
        }
    });
});
