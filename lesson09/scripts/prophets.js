const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data); // Check the data response in the console

        // Call displayProphets with the array of prophet objects
        displayProphets(data.prophets);
    } catch (error) {
        console.error(`Failed to fetch prophet data: ${error}`);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create a section element for the card
        const card = document.createElement('section');
        card.classList.add('card');
        
        // Create an h2 element for the full name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create a p element for the date of birth
        const birthDate = document.createElement('p');
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Create a p element for the place of birth
        const birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Create an img element for the portrait
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '300');

        // Append the elements to the card section
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Append the card section to the cards div
        cards.appendChild(card);
    });
};

// Call the function to fetch and display the prophet data
getProphetData();
