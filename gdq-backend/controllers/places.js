const express = require('express')
const { db } = require('')
const places = express.Router()

// Index

places.get('/', (req, res) => {
    res.json('SUPPP')
})

places.get('/identity', (res, res) => {
    res.json()
})

module.exports = places