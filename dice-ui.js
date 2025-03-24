const chatbox = document.getElementById('chatbox');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = messageInput.value.trim(); // Get the message and remove leading/trailing spaces
    if (message !== "") {
        displayMessage(message);
        messageInput.value = ""; // Clear the input after sending
    }
}

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}