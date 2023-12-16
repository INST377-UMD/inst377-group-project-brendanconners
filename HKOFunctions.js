
function displayData(data, container) {
    Object.keys(data).forEach(key => {
        const value = data[key];

        if (typeof value === 'object' && value !== null) {
            // If the value is an object, recursively display its content
            const subContainer = document.createElement('p');
            subContainer.textContent = key;
            container.appendChild(subContainer);
            displayData(value, subContainer);
        } else {
            // If the value is not an object, display it in a paragraph
            const infoElement = document.createElement('p');
            infoElement.textContent = `${key}: ${value}`;
            container.appendChild(infoElement);
        }
    });
}

// Fetch data from the first API
fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en')
    .then(response => response.json())
    .then(data => {
        // Log all information to the console
        console.log('Weather Information:', data);

        // Display information in a div on the page
        const infoContainer = document.getElementById('info-container');
        displayData(data, infoContainer);
    })
    .catch(error => console.error('Error fetching data:', error));
