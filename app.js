const request = require("request")
const dotenv = require("dotenv").config()

const address = process.argv[2]

const url = "https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=b6907d289e10d714a6e88b30761fae22"

switch(new Date().getDay())
{
case 0:
day="stop"
case 1: 
 day="Monday, temp is: "
break;
case 2:
day="Tuesday, wind speed is :"
break;
case 3:
day ="Wednesday, pressure is:"
break;
}
if (!address) {
  return console.log("Please enter the name of the city")
}

request(url, (error, response, body) => {
 const data = JSON.parse(body)
 console.log(`It's currently ${data.main.temp} outside.`)
})
