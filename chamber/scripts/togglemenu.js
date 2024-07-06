function toggleMenu() {
    var menu = document.querySelector("nav"); 
    var hamburger = document.querySelector(".hamburger"); 

    if (menu.style.display === "block") {
        menu.style.display = "none";
        hamburger.innerHTML = "☰";
    } else {
        menu.style.display = "block";
        hamburger.innerHTML = "✕";
    }
}

document.querySelector('.mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


window.addEventListener('resize', function() {
    var w = window.innerWidth;
    var menu = document.querySelector("nav");
    var hamburger = document.querySelector(".hamburger");

    if (w > 768 && menu.style.display === "none") {
        menu.style.display = "block";
        hamburger.innerHTML = "☰";
    } else if (w <= 768 && menu.style.display === "block") {
        menu.style.display = "none";
        hamburger.innerHTML = "☰";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll(".lazy");

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

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
