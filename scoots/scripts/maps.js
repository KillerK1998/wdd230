async function loadGoogleMapsApi(apiKey) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMaps&libraries=maps,marker&v=beta`;
        script.async = true;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function getCoordinates(address, apiKey) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Response for ${address}:`, data); // Debugging line
    if (data.results.length > 0) {
        const location = data.results[0].geometry.location;
        return location;
    }
    return null;
}

async function initMaps() {
    const apiKey = 'AIzaSyAqa_3SRF1HqXXb9zl0JbwL6lrZm8ELpEE'; // Your actual API key
    const address1 = 'Avenida Rafael E. Melgar, Cozumel, Q.R., Mexico';
    const address2 = 'Calle 2 Nte, Centro, 77600 San Miguel de Cozumel, Q.R., Mexico';

    const coords1 = await getCoordinates(address1, apiKey);
    const coords2 = await getCoordinates(address2, apiKey);

    console.log('Coordinates for Address 1:', coords1); // Debugging line
    console.log('Coordinates for Address 2:', coords2); // Debugging line

    if (coords1) {
        const map1Url = `https://maps.google.com/maps?q=${coords1.lat},${coords1.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
        document.getElementById('map1').src = map1Url;
    } else {
        console.error('Failed to get coordinates for Address 1'); // Debugging line
    }

    if (coords2) {
        const map2Url = `https://maps.google.com/maps?q=${coords2.lat},${coords2.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
        document.getElementById('map2').src = map2Url;
    } else {
        console.error('Failed to get coordinates for Address 2'); // Debugging line
    }
}

window.onload = () => {
    const apiKey = 'AIzaSyAqa_3SRF1HqXXb9zl0JbwL6lrZm8ELpEE'; // Your actual API key
    loadGoogleMapsApi(apiKey).catch(error => {
        console.error('Error loading Google Maps API:', error);
    });
};
