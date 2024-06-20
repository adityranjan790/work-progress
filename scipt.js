document.querySelector('button').addEventListener('click', function() {
    const input = document.querySelector('input[type="text"]');
    const message = input.value;
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.textContent = message;
        document.querySelector('.chatbox').insertBefore(newMessage, input);
        input.value = '';
    }
});








