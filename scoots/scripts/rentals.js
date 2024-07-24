// scripts/rentals.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            const rentalsContainer = document.getElementById('rentals-container');
            const rentalsTableBody = document.querySelector('#rentals-table tbody');

            data.rentals.forEach(rental => {
                // Create card for each rental
                const card = document.createElement('div');
                card.classList.add('rental-card');
                card.innerHTML = `
                    <img src="${rental.image}" alt="${rental.type}">
                    <h3>${rental.type}</h3>
                    <p>Price: ${rental.reservation_full_day} (full day reservation)</p>
                `;
                rentalsContainer.appendChild(card);

                // Create table row for each rental
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rental.type}</td>
                    <td>${rental.max_persons}</td>
                    <td>${rental.reservation_half_day}</td>
                    <td>${rental.reservation_full_day}</td>
                    <td>${rental.walk_in_half_day}</td>
                    <td>${rental.walk_in_full_day}</td>
                    <td><img src="${rental.image}" alt="${rental.type}" width="100"></td>
                `;
                rentalsTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the rentals data:', error));
});
