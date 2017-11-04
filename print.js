// Capitalize first letter
function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert to Celcius
function kelvToCelc(kelv) {
    return (kelv - 273.15).toFixed(1);
}

// Print error message
function printError(error) {
    console.error(error.message);
}

// Print weather message
function printWeather(obj) {
    console.log(`${
        capFirstLetter(obj.weather[0].description)} in ${
        obj.name}, ${
        obj.sys.country} at the moment with a temperature of ${
        kelvToCelc(obj.main.temp)} °C.`);
}

module.exports = {
    printWeather: printWeather,
    printError: printError
}