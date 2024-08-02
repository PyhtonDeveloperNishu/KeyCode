document.addEventListener('keydown', function(event) {
    var keyDisplay = document.getElementById('key');
    var codeDisplay = document.getElementById('code');

    keyDisplay.textContent = event.key;
    codeDisplay.textContent = event.keyCode;
});
22