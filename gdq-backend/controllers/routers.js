const express = require('express')
const { db } = require('')
const router = express.Router()

// Index

router.get('/', (req, res) => {

    res.json('SUPPP')
})

router.get('/identity', (res, res) => {

    res.json()
})

router.get('/user', (res, res) => {
    
    res.json()
})

router.get('/admin', (res, res) => {
    
    res.json()
})

router.post('/addItem', (res, res) => {
    
    res.json()
})

module.exports = router