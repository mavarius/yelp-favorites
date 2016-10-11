// REQUIRES
const express = require('express')
const router = express.Router()
const Favorites = require('../models/Favorites')

// ROUTES
router.route('/')
.get((req, res) => {
  Favorites.getAll((err, favoritesList) => {
    if (err) return res.status(400).send(err)
    res.send(favoritesList)
  })
})
.post((req, res) => {
  Favorites.add(req.body, (err, favoritesList) => {
    if (err) return res.status(400).send(err)
    res.send(favoritesList)
  })
})

router.delete('/:id', (req, res) => {
  console.log('req.params.id: ', req.params.id)
  Favorites.remove(req.params.id, (err, favoritesList) => {
    if (err) return res.status(400).send(err)
    res.send(favoritesList)
  })
})

// EXPORTS
module.exports = router
