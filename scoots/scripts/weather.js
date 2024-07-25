document.addEventListener('DOMContentLoaded', (event) => {
    fetchWeatherData();
});

function fetchWeatherData() {
    const apiKey = '851406e8c24563b4eadba0961fac71d8';
    const city = 'Cozumel';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (document.getElementById('current-temp')) {
                document.getElementById('current-temp').innerText = `${convertToFahrenheit(data.main.temp)}°F`;
            }
            if (document.getElementById('current-humidity')) {
                document.getElementById('current-humidity').innerText = `${data.main.humidity}%`;
            }
            if (document.getElementById('weather-main')) {
                document.getElementById('weather-main').innerText = data.weather[0].main;
            }
            if (document.getElementById('weather-description')) {
                document.getElementById('weather-description').innerText = data.weather[0].description;
            }
            // Commented out the line to set the weather icon source
            // if (document.getElementById('weather-icon')) {
            //     document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            // }
            if (document.getElementById('temp-max')) {
                document.getElementById('temp-max').innerText = `Today's high: ${convertToFahrenheit(data.main.temp_max)}°F`;
            }
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list.find(item => item.dt_txt.includes('15:00:00'));
            if (forecast && document.getElementById('forecast-temp')) {
                document.getElementById('forecast-temp').innerText = `${convertToFahrenheit(forecast.main.temp)}°F`;
            }
        });
}

function convertToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32);
}

function closeAlert() {
    if (document.getElementById('temp-alert')) {
        document.getElementById('temp-alert').style.display = 'none';
    }
}

function makeReservation() {
    alert('Redirecting to reservation page...');
    // Add your reservation logic here
}
