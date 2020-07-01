const NodeGeocoder = require('node-geocoder')

const options = {
  provider: pricess.env.GEOCODER_PROVIDER,
  httpAdapted: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
}
