document.addEventListener("DOMContentLoaded", function() {
    const visitCountElement = document.getElementById("visitCount");
    const sidebarContent = document.getElementById('sidebar-content');

    if (visitCountElement && sidebarContent) {
        console.log("Elements found in the DOM.");

        
        let visitCount = localStorage.getItem("visitCount");
        console.log("Initial visit count from localStorage:", visitCount);

        if (!visitCount) {
            visitCount = 0;
        } else {
            visitCount = parseInt(visitCount, 10);
        }

        visitCount += 1;
        localStorage.setItem("visitCount", visitCount);
        visitCountElement.textContent = visitCount;
        console.log("Updated visit count:", visitCount);

        
        function getDaysDifference(date1, date2) {
            const oneDay = 24 * 60 * 60 * 1000; 
            const diffInTime = date2.getTime() - date1.getTime();
            return Math.round(diffInTime / oneDay);
        }

        function displayVisitMessage() {
            const lastVisit = localStorage.getItem('lastVisit');
            const currentVisit = new Date();
            console.log("Last visit from localStorage:", lastVisit);
            console.log("Current visit date:", currentVisit);

            if (!lastVisit) {
               
                sidebarContent.innerText = "Welcome! Let us know if you have any questions.";
                console.log("First visit message displayed.");
            } else {
                const lastVisitDate = new Date(lastVisit);
                const daysDifference = getDaysDifference(lastVisitDate, currentVisit);
                console.log("Days difference:", daysDifference);

                if (daysDifference < 1) {
                    sidebarContent.innerText = "Back so soon! Awesome!";
                    console.log("Back so soon message displayed.");
                } else if (daysDifference === 1) {
                    sidebarContent.innerText = `You last visited 1 day ago.`;
                    console.log("1 day ago message displayed.");
                } else {
                    sidebarContent.innerText = `You last visited ${daysDifference} days ago.`;
                    console.log(`${daysDifference} days ago message displayed.`);
                }
            }

            
            localStorage.setItem('lastVisit', currentVisit.toISOString());
            console.log("Current visit date stored in localStorage:", currentVisit.toISOString());
        }

        
        displayVisitMessage();
    } else {
        console.error("Required elements are not found in the DOM.");
    }
});
