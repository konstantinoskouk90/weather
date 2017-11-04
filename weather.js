// Assign https & http modules
const https = require('https');
const http = require('http');

// API key
const api = require('./api.json');

// Print functions
const print = require('./print');

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

  try {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?${params}=${args}&APPID=${api.key}`, response => {
      if (response.statusCode === 200) {

        let body = "";

        // Read data
        response.on('data', chunk => {
          body += chunk.toString();
        });

        // After the response has ended
        response.on('end', () => {

          // Parse data
          const weather = JSON.parse(body);
          const country = weather.sys.country;

          // Print data
          if (country) {
            print.printWeather(weather);
          } else {
            // Location not found error
            print.printError(
              new Error(`The location ${
                country} was not found.`));
          }
        });

      } else {
        // Status code error
        print.printError(
          new Error(`There was an error getting the message for ${
            args} (${
              http.STATUS_CODES[response.statusCode]}).`));
      }
    });

    // Emitted error
    request.on('error', print.printError);
  } catch (error) {
    // Malformed URL error
    print.printError(error);
  }
}

module.exports.get = get;