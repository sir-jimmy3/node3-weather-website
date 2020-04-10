const request = require('request')

const geocode = (address, callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic25vdy1qYW1lcyIsImEiOiJjazhvcWY5NmkwNnJmM25xaXhsN3k1eWtpIn0.xVElwOGwh0LHAKl3mdaV6Q&limit=1'
    request({ url: url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode