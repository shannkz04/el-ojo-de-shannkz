document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");

   
document.getElementById('share-button').addEventListener('click', function(e) {
    e.preventDefault();

    // URL de la página que se quiere compartir
    const url = window.location.href;

    // Redes sociales a compartir
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; // Facebook

    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`; // Twitter

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`; // WhatsApp

    // Abrir ventana para compartir en cada red social
    const shareWindow = window.open(shareUrl, 'facebook-share', 'width=600,height=400');
    if (!shareWindow) {
        alert('No se pudo abrir la ventana de compartir. Por favor, asegúrate de que tu navegador permita ventanas emergentes.');
    }
});
