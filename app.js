const weather = require('./weather');

const input = process.argv.slice(2).join(" ").replace(/\s/, ",");

//query: 90210
//query: London,UK
weather.get(input);