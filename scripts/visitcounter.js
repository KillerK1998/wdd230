document.addEventListener("DOMContentLoaded", function() {
    const visitCountElement = document.getElementById("visitCount");
    let visitCount = localStorage.getItem("visitCount");

    if (!visitCount) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount, 10);
    }

    visitCount += 1;
    localStorage.setItem("visitCount", visitCount);

    visitCountElement.textContent = visitCount;
});
