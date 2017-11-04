const weather = require('./weather');

const input = process.argv.slice(2).join(" ").replace(/\s/, ",");

// Query: 90210
// Query: London,UK
weather.get(input);