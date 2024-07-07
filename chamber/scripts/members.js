document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members");
    const toggleViewButton = document.getElementById("toggleView");

    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            displayMembers(data);
        });

    toggleViewButton.addEventListener("click", () => {
        membersContainer.classList.toggle("list-view");
        membersContainer.classList.toggle("grid-view");
    });

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.className = "member";
            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;
            membersContainer.appendChild(memberDiv);
        });
    }
});
