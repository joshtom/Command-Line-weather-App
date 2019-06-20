// const Weather = {
//     "coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200

// };

// let getWeatherId = Weather.weather[0].description;
// let getWeatherTemp = Weather.main.temp;
// console.log(getWeatherTemp+' Degree Celcius');


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