function findNearbyLocations() {
    // Check if browser supports geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showNearbyLocations, handleError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showNearbyLocations(position) {
    const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    // Initialize Google Maps Places service
    const map = new google.maps.Map(document.createElement('div')); // Hidden map element
    const service = new google.maps.places.PlacesService(map);

    // Search for pharmacies near user's location
    const request = {
        location: userLocation,
        radius: '5000', // Search within 5km
        type: ['pharmacy']
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            displayLocations(results);
        } else {
            alert("No nearby locations found.");
        }
    });
}

function displayLocations(locations) {
    const locationResults = document.getElementById('locationResults');
    locationResults.innerHTML = '';

    // Populate list with nearby locations
    locations.forEach(place => {
        const listItem = document.createElement('li');
        listItem.textContent = `${place.name} - ${place.vicinity}`;
        locationResults.appendChild(listItem);
    });
}

function handleError(error) {
    alert("Unable to retrieve your location due to an error.");
}
