// REQUIRES
const Yelp = require('yelp')

// API KEY
const yelp = new Yelp({
  consumer_key: 'mtk0v5_ODjlJeBwMX7Ym-Q',
  consumer_secret: 'H69yVDrDQZgOBN6jMNH47u7kfDY',
  token: 'kzB_urAVs688BSuXHQ18PQa37msplXWH',
  token_secret: 'NMQoBwEeS2xPnQ5qWTbhmoyjtqg'
})

exports.search = (query, cb) => {
  yelp.search(query)
    .then(function (data) {
      return cb(null, data)
    })
    .catch(function (err) {
      return cb(err)
    })
}

exports.details = (id, cb) => {
  yelp.business(id)
    .then(function (data) {
      return cb(null, data)
    })
    .catch(function (err) {
      return cb(err)
    })
}
