document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");

   
document.getElementById('gifButton').addEventListener('click', function() {
    const gifs = [
        'gif1.gif', // Asegúrate de tener estos gifs en tu carpeta de imágenes
        'gif2.gif',
        'gif3.gif'
    ];

    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = `<img src="${randomGif}" alt="Gif Aleatorio" class="gif-random">`;
});
