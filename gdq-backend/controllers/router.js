const {urlencoded} = require('express')
const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    db.Router.find()
    .then((router) =>{
        res.render('routers/server', {router})
    })
    .catch(err => {
        res.render('error404')
    })
});


 router.get('/login', (req, res) => {
    console.log("I'm logged in")
     res.json()
 });

 router.get('/admin', (req, res) => {

     res.json()
 });

 router.get('/user', (req, res) => {
     res.json()
 });

 router.get('/404', (req, res) => {
     res.json()
 });

 router.get('/item', (req, res) => {
    res.json()
});

router.get('/contact', (req, res) => {
    console.log("I'm contacted")

    var fakeContact = [
        {title: 'Garrison'},
        {title: 'Daniel'},
        {title: 'Malik'},
    ]
    res.json(fakeContact)
});

 router.post('/addItem', (req, res) => {
     res.json()
 });
 
 router.post('/comment', (req, res) => {
     res.json()
 });

module.exports = router