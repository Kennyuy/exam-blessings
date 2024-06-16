document.getElementById('confettiButton').addEventListener('click', () => {
    showConfetti();
});

document.getElementById('musicControlButton').addEventListener('click', () => {
    const music = document.getElementById('background-music');
    const button = document.getElementById('musicControlButton');
    if (music.paused) {
        music.play();
        button.textContent = '暂停音乐';
    } else {
        music.pause();
        button.textContent = '播放音乐';
    }
});

function showConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    confettiContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confettiContainer.appendChild(confetti);
        animateConfetti(confetti);
    }
}

function animateConfetti(confetti) {
    const duration = Math.random() * 3 + 2;
    const size = Math.random() * 10 + 5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const rotation = Math.random() * 360;

    confetti.style.position = 'absolute';
    confetti.style.left = `${x}%`;
    confetti.style.top = `${y}%`;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.borderRadius = '50%';
    confetti.style.transition = `transform ${duration}s ease-out, opacity ${duration}s ease-out`;
    confetti.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        confetti.style.transform = `translateY(100vh) rotate(${rotation + 720}deg)`;
        confetti.style.opacity = '0';
    }, 50);
}
