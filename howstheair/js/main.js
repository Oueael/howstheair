document.getElementById('checkBtn').addEventListener('click', function() {
    let city = document.getElementById('cityInput').value;
    let aqiInfoDiv = document.getElementById('aqiInfo');
    
    if (city.trim() === '') {
        aqiInfoDiv.innerHTML = 'Please enter a city name.';
        return;
    }
    
    aqiInfoDiv.innerHTML = 'Checking AQI...';

    fetch(`http://api.waqi.info/feed/${encodeURIComponent(city)}/?token=54b974ecd53e5115b754143fffdca1f61ffebf3f`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                let aqiData = data.data;
                aqiInfoDiv.innerHTML = `City: ${city}<br>AQI: ${aqiData.aqi}`;
            } else {
                aqiInfoDiv.innerHTML = 'Data unavailable. Please try another city.';
            }
        })
        .catch(error => {
            aqiInfoDiv.innerHTML = 'Error retrieving AQI data.';
            console.error('Error:', error);
        });
});
