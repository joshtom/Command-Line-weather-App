/**
 * Sign up with weather underground to get thier api key
 * Console.log the value of what you get
 */
// https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid=89ba91749d1b7afd202772683a67f2f0

const https = require('https');
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid=89ba91749d1b7afd202772683a67f2f0`, (res) =>{
        console.log('statusCode:', res.statusCode);
        console.log('headers', res.headers);

       if(res.statusCode === 200) {
           let body = "";
        res.on('data', (data) => {
            body =  process.stdout.write(data);
            // body += data.toString();
        })
       }
    });

    
// Get Weather Information By city name


//Get Weather information By city ID

