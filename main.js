onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function() {
    const navigateButton = document.getElementById('navigate-btn');

    if (navigateButton) {
        navigateButton.addEventListener('click', function() {
            const audio = new Audio('audio/your-audio-file.mp3');
            audio.loop = true;
            audio.play();

            // Guardar el estado del audio para cuando se cargue la siguiente página
            localStorage.setItem('audioLoaded', 'true');
            localStorage.setItem('audioSrc', 'audio/your-audio-file.mp3');
            localStorage.setItem('audioCurrentTime', audio.currentTime);

            // Navegar a la otra página después de un pequeño retraso para asegurar que el audio comience
            setTimeout(() => {
                window.location.href = 'FLORES.html';
            }, 500);  // 500ms de retraso para asegurar que el audio empieza
        });
    } else {
        // Si el audio ya estaba cargado, continúa reproduciéndolo en la nueva página
        if (localStorage.getItem('audioLoaded')) {
            const savedAudio = new Audio(localStorage.getItem('audioSrc'));
            savedAudio.loop = true;
            savedAudio.currentTime = parseFloat(localStorage.getItem('audioCurrentTime'));
            savedAudio.play();
        }
    }
});
