const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4bc855b4f01b99010fe75d23ef246e58&query=' + address

    request({ url, json: true }, (error, {body}) => {
        const responseError = body.error
        if (responseError) {
            callback('Unable to connect to location services!', undefined)
        } else {
            callback(undefined, {
                location: body.location,
                weather: body.current
            })
        }
    })
}

module.exports = geocode