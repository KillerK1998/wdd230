function displayBanner() {
    const today = new Date().getDay();
    const banner = document.getElementById('meet-greet-banner');

    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = 'block';
    }
}

function closeBanner() {
    document.getElementById('meet-greet-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    displayBanner();
});
