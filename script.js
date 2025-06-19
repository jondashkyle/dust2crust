// Fall equinox 2025 is on September 22, 2025 at 19:19 UTC
const fallEquinox2025 = new Date('2025-09-22T19:19:00Z');

function updateCountdown() {
    const now = new Date();
    const timeLeft = fallEquinox2025 - now;

    if (timeLeft <= 0) {
        document.querySelector('.countdown').innerHTML = '<div class="countdown-text">Fall Equinox 2025 has arrived!</div>';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownHTML = `
        <div class="countdown-unit">
            ${days} day${days !== 1 ? 's' : ''}
        </div>
        <div class="countdown-unit">
            ${hours.toString()} hour${hours !== 1 ? 's' : ''}
        </div>
        <div class="countdown-unit">
            ${minutes.toString()} minute${minutes !== 1 ? 's' : ''}
        </div>
        and
        <div class="countdown-unit">
            ${seconds.toString()} second${seconds !== 1 ? 's' : ''}
        </div>
    `;

    document.querySelector('.countdown').innerHTML = countdownHTML;
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
