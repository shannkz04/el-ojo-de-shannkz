document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");
    
    const shareButton = document.getElementById("share-button");
    const shareMenu = document.getElementById("share-menu");

    // Mostrar u ocultar el menú cuando se haga clic en el botón de compartir
    shareButton.addEventListener("click", function (event) {
        event.preventDefault();
        shareMenu.style.display = (shareMenu.style.display === "block") ? "none" : "block";
    });

    // Ocultar el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!shareButton.contains(event.target) && !shareMenu.contains(event.target)) {
            shareMenu.style.display = "none";
        }
    });
});
