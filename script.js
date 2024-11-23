// Variables globales
const countdownElement = document.getElementById('countdown');
const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');
const submitPasswordBtn = document.getElementById('submitPasswordBtn');

// Función para actualizar el contador
function updateCountdown() {
    const targetDate = new Date('2024-11-30T18:00:00-03:00'); // Hora de Argentina (UTC-3)
    const now = new Date();
    const remainingTime = targetDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

    // Si la cuenta regresiva ha terminado
    if (remainingTime < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "¡El tiempo ha terminado!";
    }
}

// Función para pausar/reanudar la música
function togglePlayPause() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.innerText = '🎶'; // Cambia el emoji si lo deseas
    } else {
        backgroundMusic.pause();
        playPauseBtn.innerText = '🎵'; // Cambia el emoji si lo deseas
    }
}

// Función para ajustar el volumen
function adjustVolume() {
    backgroundMusic.volume = volumeControl.value;
}

// Event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
volumeControl.addEventListener('input', adjustVolume);

// Función para manejar el envío de la contraseña
submitPasswordBtn.addEventListener('click', () => {
    const password = document.getElementById('passwordInput').value;
    if (password) {
        alert(`Contraseña inválida`);
        // Aquí puedes agregar más lógica para manejar la contraseña
    } else {
        alert("Por favor, ingresa una contraseña.");
    }
});

// Actualiza el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Inicializa el volumen
adjustVolume();