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
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario y la recarga de la página

    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== '') {
        const commentContainer = document.getElementById('commentsContainer');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p>${commentText}</p>`;
        commentContainer.appendChild(newComment);

        // Limpiar el textarea después de enviar el comentario
        document.getElementById('commentText').value = '';
    }
});
