// Assign http module
const https = require('https');

// Retrieve API key
const api = require('./api.json');

// Define search options
const search = {
    city: "q",
    zip: "zip"
}

// Check if input contains only numbers
function isNumber(val) {
   return /^\d+$/.test(val) ? search.zip : search.city;
}

// Get current weather by using openweathermap.org API
function get(args) {

    // Number check
    const params = isNumber(args);
    
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?${params}=${args}&APPID=${api.key}`, response => {

        let body = "";

        // Read data
        response.on('data', chunk => {
            body += chunk.toString();
        });

        // After the response has ended
        response.on('end', () => {
            console.log(body);
            // Parse data
            // Print data
        });
    });
}

module.exports.get = get;

//TODO: Handle any errors