function toggleMenu() {
    var menu = document.querySelector("nav"); // Make sure this ID matches your HTML
    var hamburger = document.querySelector(".hamburger"); // Ensure this ID is also in your HTML

    if (menu.style.display === "block") {
        menu.style.display = "none";
        hamburger.innerHTML = "☰";
    } else {
        menu.style.display = "block";
        hamburger.innerHTML = "✕";
    }
}

// Optional: Resize event listener to adjust menu state when resizing windows
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
