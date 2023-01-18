const {urlencoded} = require('express')
const express = require('express')
const router = express.Router()

router.get('/',(req, res, next) => {
    res.render('index', { title: 'Express' });
})


router.get('/identity', (res, res) => {
    res.json()
})

module.exports = router