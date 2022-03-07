const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4bc855b4f01b99010fe75d23ef246e58&query=' + address

    request({ url, json: true }, (error, {body}) => {
        const responseError = body.error
        if (responseError) {
            callback('Unable to connect to location services!', undefined)
        } else {
            console.log(body)
            callback(undefined, {
                forecastData: body.current.weather_descriptions[0] + ": It is currently " + body.current.temperature + 
                " degrees out. It feels like " + body.current.feelslike + " degrees. The humidity is " +
                body.current.humidity + "%.",
                location: body.location
            })
        }
    })
}

module.exports = geocode