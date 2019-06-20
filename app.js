/**
 * Sign up with weather underground to get thier api key
 * Console.log the value of what you get
 */
// https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid=89ba91749d1b7afd202772683a67f2f0

const https = require('https');
const http = require('http');
const api = require('./api.json');
const gCityName = require('./weather');
   

    const cityNames = process.argv;
    cityNames.forEach(gCityName.get);


    
// Get Weather Information By city name


//Get Weather information By city ID

