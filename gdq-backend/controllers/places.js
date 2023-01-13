const {urlencoded} = require('express')
const express = require('express')
const { db } = require('../../../Back-End/API\'s/rest-rant/models/comment')
const router = express.Router()

router.get('/',(req, res) => {
    db.Place.find()
    .then((places) =>{
        res.render('places/index', {places})
    })
    .catch(err => {
        res.render('error404')
    })
})


router.get('/identity', (res, res) => {
    res.json()
})

module.exports = router