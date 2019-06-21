/**
 * Sign up with weather underground to get thier api key
 * Console.log the value of what you get
 */
// https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid=89ba91749d1b7afd202772683a67f2f0


const gCityName = require('./weather');
   

    const cityNames = process.argv.slice(2)
    cityNames.forEach(gCityName.get);
    console.log(cityNames);


    
// Get Weather Information By city name


//Get Weather information By city ID

