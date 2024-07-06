
function toggleMenu() {
    const menu = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");

    if (menu && hamburger) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            hamburger.innerHTML = "☰";
        } else {
            menu.style.display = "block";
            hamburger.innerHTML = "✕";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    const modeToggle = document.querySelector('.mode');
    if (modeToggle) {
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

   
    window.addEventListener('resize', function() {
        const w = window.innerWidth;
        const menu = document.querySelector("nav");
        const hamburger = document.querySelector(".hamburger");

        if (menu && hamburger) {
            if (w > 768 && menu.style.display === "none") {
                menu.style.display = "block";
                hamburger.innerHTML = "☰";
            } else if (w <= 768 && menu.style.display === "block") {
                menu.style.display = "none";
                hamburger.innerHTML = "☰";
            }
        }
    });

   
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
