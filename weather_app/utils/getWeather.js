const request = require('request')


// function getWeather(error,res,callbk) {
//     TOKEN= process.env.WEATHER_STACK_ACCESS_TOKEN
//     if (error){
//         console.log("There are some problems in getttig geoCode for provided location")
//     }
//     else{
//     // Current Weather API Endpoint
//     latitude = res.latitude
//     longitude = res.longitude
//     location = res.location
//     const getWeatherURL = 'http://api.weatherstack.com/current?access_key='+TOKEN+'&query=' + encodeURIComponent(latitude) + ','+ encodeURIComponent(longitude) + '&units=m';
//     request({ url: getWeatherURL, json: true }, (err, res) => {
//         if (err) {
//             callbk("There are some issues", undefined)
//         } else if (res.success == false) {
//             callbk("Problem with User Input", undefined)
//         }
//         else {
//             callbk(undefined, res.body.location.name + ' Current temprature is: ' + res.body.current.temperature + '(degree)')
//         }
//     })
// }
// }
// module.exports = getWeather

//using object destucturing shorthand syntax
function getWeather(error,{latitude,longitude}={},callbk) {
    TOKEN= process.env.WEATHER_STACK_ACCESS_TOKEN
    if (error){
        console.log("There are some problems in getttig geoCode for provided location")
    }
    else{
    const getWeatherURL = 'http://api.weatherstack.com/current?access_key='+TOKEN+'&query=' + encodeURIComponent(latitude) + ','+ encodeURIComponent(longitude) + '&units=m';
    
    request({ url: getWeatherURL, json: true }, (err, {success,body}) => {
        if (err) {
            callbk("There are some issues", undefined)
        } else if (success == false) {
            callbk("Problem with User Input", undefined)
        }
        else {
           callbk(undefined, body.location.name + ' Current temprature is: ' + body.current.temperature + '(degree)')
           
        }
    })    
}
}
module.exports = getWeather