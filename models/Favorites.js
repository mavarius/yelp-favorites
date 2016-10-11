const fs = require('fs')
const path = require('path')

const favoritesJSON = path.join(__dirname, '../data/favorites.json')

// GET FAVORITES
exports.getAll = (cb) => {
  fs.readFile(favoritesJSON, (err, buffer) => {
    if (err) return cb(err)

    let data
    try {
      data = JSON.parse(buffer)
    } catch (e) {
      data = []
    }

    cb(null, data)
  })
}

// WRITE TO FAVORITES
exports.write = function (newData, cb) {
  let json = JSON.stringify(newData)
  fs.writeFile(favoritesJSON, json, cb)
}

// ADD NEW FAVORITE
exports.add = function (newItem, cb) {
  exports.getAll((err, items) => {
    if (err) return cb(err)
    items.push(newItem)
    exports.write(items, cb)

    cb(null, items)
  })
}

// REMOVE FAVORITE
exports.remove = function (filterId, cb) {
  exports.getAll((err, items) => {
    if (err) return cb(err)
    items = items.filter(item => (item.id !== filterId))
    exports.write(items, cb)

    cb(null, items)
  })
}
