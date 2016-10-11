// REQUIRES
const express = require('express')
const router = express.Router()
const Search = require('../models/Search')

// ROUTES
router.get('/:id', (req, res) => {
  Search.details(req.params.id, (err, details) => {
    if (err) return res.status(400).send(err)
    res.send(details)
  })
})

router.get('/', (req, res) => {
  Search.search(req.query, (err, results) => {
    if (err) return res.status(400).send(err)
    res.send(results)
  })
})

// EXPORTS
module.exports = router
