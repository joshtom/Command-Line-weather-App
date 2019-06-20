/**
 * Sign up with weather underground to get thier api key
 * Console.log the value of what you get
 */
// https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid=89ba91749d1b7afd202772683a67f2f0

const https = require('https');
const http = require('http');
const api = require('./api.json');

    function printError(error){
        console.log(error);
    }
    function printMessage(cityName, getWeatherTemp){
        console.log(`The weather Temperature for ${cityName} is ${getWeatherTemp} Degree Celcius`);
    }
    
    // Getting the dynamic input entered by user
    function get(cityName) {
        https.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api.key}`, (res) =>{
            // console.log('statusCode:', res.statusCode);
            // console.log('headers', res.headers);
    
           if(res.statusCode === 200) {
               let body = "";
            res.on('data', (data) => {
                // body =  process.stdout.write(data);
                body += data.toString();
            });
            res.on('end', () =>{
                try{
                    const weatherInfo = JSON.parse(body);
                    let getWeatherTemp = weatherInfo.main.temp;
                    // console.log(`${getWeatherTemp} Degree Celcius`);
                    printMessage(cityName, getWeatherTemp);
                } catch(error) {
                    console.log(error.message);
                }
            })
           } else {
               const message = `There was an error getting the weather information for ${cityName} (${http.STATUS_CODES[res.statusCode]})`;
               const statusCodeError = new Error(message);
               printError(statusCodeError);
           }
        });
    
    }

    console.log()


    
// Get Weather Information By city name


//Get Weather information By city ID

