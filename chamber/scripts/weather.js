const apiKey = '851406e8c24563b4eadba0961fac71d8'; 
const cityName = 'Saint George,US'; 

async function getWeather() {
    try {
       
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`);
        const currentWeatherData = await currentWeatherResponse.json();

        
        document.getElementById('current-temperature').textContent = Math.round(currentWeatherData.main.temp);
        document.getElementById('weather-description').textContent = currentWeatherData.weather[0].description;
        const currentIconUrl = `http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`;
        console.log('Current weather icon URL:', currentIconUrl);
        document.getElementById('current-weather-icon').src = currentIconUrl;

       
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`);
        const forecastData = await forecastResponse.json();

       
        const day1IconUrl = `http://openweathermap.org/img/wn/${forecastData.list[7].weather[0].icon}@2x.png`; // 24 hours from now
        console.log('Day 1 weather icon URL:', day1IconUrl);
        document.querySelector('.day1-icon').src = day1IconUrl;
        document.querySelector('.day1-forecast').textContent = Math.round(forecastData.list[7].main.temp);

        const day2IconUrl = `http://openweathermap.org/img/wn/${forecastData.list[15].weather[0].icon}@2x.png`; // 48 hours from now
        console.log('Day 2 weather icon URL:', day2IconUrl);
        document.querySelector('.day2-icon').src = day2IconUrl;
        document.querySelector('.day2-forecast').textContent = Math.round(forecastData.list[15].main.temp);

        const day3IconUrl = `http://openweathermap.org/img/wn/${forecastData.list[23].weather[0].icon}@2x.png`; // 72 hours from now
        console.log('Day 3 weather icon URL:', day3IconUrl);
        document.querySelector('.day3-icon').src = day3IconUrl;
        document.querySelector('.day3-forecast').textContent = Math.round(forecastData.list[23].main.temp);

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


getWeather();
