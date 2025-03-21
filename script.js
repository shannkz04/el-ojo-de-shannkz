document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a Kusomagi! Únete a la aventura.");

    // Funcionalidad del chat
    const messagesContainer = document.getElementById("messages");
    const messageInput = document.getElementById("messageInput");
    const sendMessageButton = document.getElementById("sendMessage");

    sendMessageButton.addEventListener("click", function() {
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            const messageElement = document.createElement("div");
            messageElement.textContent = `Jugador: ${messageText}`;
            messagesContainer.appendChild(messageElement);

            // Limpiar el campo de texto
            messageInput.value = "";
            messageInput.focus();

            // Desplazar hacia el fondo para ver los mensajes más recientes
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    });

    // Funcionalidad de registro de usuario
    const registerForm = document.getElementById("registerForm");
    const messageRegister = document.getElementById("messageRegister");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username && email && password) {
            // Guardar usuario (aquí solo simula un registro)
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);

            messageRegister.textContent = `¡Registro exitoso, ${username}! Ahora puedes interactuar en la comunidad.`;
            messageRegister.style.color = "#28a745";
        } else {
            messageRegister.textContent = "Por favor, complete todos los campos.";
            messageRegister.style.color = "#dc3545";
        }
    });
});

