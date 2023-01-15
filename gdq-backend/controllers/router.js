const {urlencoded} = require('express')
const express = require('express')
const { db } = require('')
const router = express.Router()

router.get('/',(req, res) => {
    db.Router.find()
    .then((routers) =>{
        res.render('routers/index', {routers})
    })
    .catch(err => {
        res.render('error404')
    })
})


router.get('/login', (res, res) => {
    res.json()
})

router.get('/admin', (res, res) => {

    res.json()
})

router.get('/user', (res, res) => {
    res.json()
})

router.get('/404', (res, res) => {
    res.json()
})

router.post('/addItem', (res, res) => {
    res.json()
})

router.post('/comment', (res, res) => {
    res.json()
})

module.exports = router