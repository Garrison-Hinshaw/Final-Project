require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const usersRouter = require('./controllers/user')
const path = require('path')
const router = require('./controllers/router')

// middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))






app.use('/router', router)

app.use(express.static(path.join(__dirname, '../gdq-frontend', 'build')))

app.listen(process.env.PORT, () => {
  console.log("I am alive port " + process.env.PORT)
})

