const geoCode = require('./utils/geoCode')
const getWeather = require('./utils/getWeather')

//accesspt Location input from command line
cityName = process.argv[2];

if (!cityName) {
    console.log("Please provide a valid location!!!")
} else {
    geoCode(cityName, getWeather)
}