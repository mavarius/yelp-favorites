// REQUIRES
const express = require('express')
const router = express.Router()

const favorites = require('./favoritesRoutes')

// ROUTES
router.use('/favorites', favorites)

// EXPORTS
module.exports = router
