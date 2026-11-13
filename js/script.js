
// ===================================
// WEDDING COUNTDOWN
// ===================================

// Wedding date and time (Indian Standard Time)
const weddingDate = new Date(
    "2026-11-25T20:00:00+05:30"
).getTime();

function updateCountdown() {

    const currentDate = new Date().getTime();

    const difference = weddingDate - currentDate;

    // Check whether wedding date has arrived
    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        document.getElementById("countdown-message").innerText =
            "It's Our Wedding Day! ❤️💍";

        clearInterval(countdownInterval);

        return;
    }

    // Calculate remaining time
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    // Update HTML elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}

// Start countdown
updateCountdown();

// Refresh every second
const countdownInterval = setInterval(
    updateCountdown,
    1000
);
