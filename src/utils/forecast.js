const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c0032a960a358e77a5fcbf8be71808d6&query=' + latitude + ',' + longitude + '&units=f'

    // @Args: {options}, fn(callback)
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' throughout the day. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees')
        }
    })
}



module.exports = forecast