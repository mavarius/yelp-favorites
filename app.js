// PORT
const PORT = 8000

// REQUIRES
const Yelp = require('yelp')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

const api = require('./routes/api')

// APP DECLARATION
const app = express()

// MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('build'))
app.use(cors())

// WEBPACK CONFIGURATION
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath, noInfo: true }))
app.use(webpackHotMiddleware(compiler))

// API KEY
const yelp = new Yelp({
  consumer_key: 'mtk0v5_ODjlJeBwMX7Ym-Q',
  consumer_secret: 'H69yVDrDQZgOBN6jMNH47u7kfDY',
  token: 'kzB_urAVs688BSuXHQ18PQa37msplXWH',
  token_secret: 'NMQoBwEeS2xPnQ5qWTbhmoyjtqg'
})

// ROUTES
app.use('/api', api)
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})

// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`)
})
