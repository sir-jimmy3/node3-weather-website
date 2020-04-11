const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=687aa56f6c09b75eb49f4496ce183c54&units=metric'

    request({ url, json: true }, (error, { body }) => {

        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find the location!', undefined)
        } else {
            callback(undefined, 'The temperature is ' + body.main.temp + ' degrees out. The weather type is ' + body.weather[0].main)
        }
    })
}

module.exports = forecast