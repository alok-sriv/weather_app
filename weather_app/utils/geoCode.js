const request = require('request');
const getResult = require('./getResult')
TOKEN = process.env.MAP_BOX_ACCESS_TOKEN

//encodeURIComponent : to handle URL safely like if URL has special characters
// function geoCode(address, callbk) {
//     const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token='+TOKEN+'&limit=1'
//     request({ url: geoCodeUrl, json: true }, (err, res) => {
//         if (err) {
//             callbk("Unable to fetch details", undefined)
//         }
//         else if (res.body.features.length === 0) {
//             callbk("Problem with User Input", undefined)
//         }
//         else {
//             const latitude = res.body.features[0].center[1];
//             const longitude = res.body.features[0].center[0];
//             const location = res.body.features[0].place_name;
//             callbk(undefined, { latitude, longitude, location },getResult)
//         }
//     })
// }

// module.exports = geoCode

//short hand syntax for obejct destructuing

function geoCode(address, callbk) {
    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token='+TOKEN+'&limit=1'
    request({ url: geoCodeUrl, json: true }, (err, {body}) => {
        if (err) {
            callbk("Unable to fetch details", undefined)
        }
        else if (body.features.length === 0) {
            callbk("Problem with User Input", undefined)
        }
        else {
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const location = body.features[0].place_name;
            callbk(undefined, { latitude, longitude, location },getResult)
        }
    })
}

module.exports = geoCode