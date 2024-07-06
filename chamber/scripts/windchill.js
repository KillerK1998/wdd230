// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Returning the wind chill factor rounded to 2 decimal places
    } else {
        return "N/A";
    }
}


function displayWindChill() {
    const tempElement = document.querySelector(".temperature");
    const windSpeedElement = document.querySelector(".windspeed");

    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    const windChill = calculateWindChill(temp, windSpeed);

    
    const windChillElement = document.createElement("p");
    windChillElement.textContent = `Wind Chill: ${windChill}`;
    document.querySelector("#weather").appendChild(windChillElement);
}


document.addEventListener("DOMContentLoaded", displayWindChill);
