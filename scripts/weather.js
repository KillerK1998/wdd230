const apiKey = '851406e8c24563b4eadba0961fac71d8';
const city = 'Saint George';
const country = 'US';

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.main || !data.weather) {
            throw new Error('Invalid data structure');
        }

        const temperature = Math.ceil(data.main.temp); // Round up the temperature
        const description = data.weather[0].description;
        const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `
            <p>Temperature: ${temperature} °F</p>
            <p>Condition: ${description}</p>
            <img src="${icon}" alt="${description}">
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = '<p>Unable to load weather data at the moment.</p>';
    }
}

getWeather();
