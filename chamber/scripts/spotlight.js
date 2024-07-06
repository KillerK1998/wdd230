document.addEventListener('DOMContentLoaded', function() {
    fetch('data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched:', data);
            const silverGoldMembers = data.filter(member => {
                console.log('Checking member:', member);
                console.log('Checking member membershipLevel:', member.membershipLevel);
                return member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold';
            });
            console.log('Filtered members:', silverGoldMembers);
            const selectedMembers = getRandomMembers(silverGoldMembers, 3);
            displayMembers(selectedMembers);
        })
        .catch(error => console.error('Error fetching or parsing JSON data:', error));
});

function getRandomMembers(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayMembers(members) {
    const container = document.getElementById('spotlight-container');
    if (!container) {
        console.error('Spotlight container not found');
        return;
    }
    members.forEach(member => {
        const spotlightDiv = document.createElement('div');
        spotlightDiv.className = 'spotlight';
        spotlightDiv.innerHTML = `<h3>${member.name}</h3><p>${member.otherInfo}</p>`;
        container.appendChild(spotlightDiv);
    });
}
