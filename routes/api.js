// REQUIRES
const express = require('express')
const router = express.Router()

const favorites = require('./favoritesRoutes')
const search = require('./searchRoutes')

// ROUTES
router.use('/favorites', favorites)
router.use('/search', search)

// EXPORTS
module.exports = router
