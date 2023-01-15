require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express();
// const router = require('./controllers/places')
const path = require('path')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// INDEX

app.get('/', (req, res) => {

res.json()
})

app.post('/addItem', async(req, res) => {

  res.json()
})

// app.use('/places', require('./controllers'))
// app.get('*', (req, res) => {
//     res.render('error404')
// })



app.get('/', (req, res) => {
    res.json('home')
})


app.use(express.static(path.join(__dirname, '../gdq-frontend/build', 'build')))

app.listen(process.env.PORT, () => {
  console.log("I am alive port " + process.env.PORT)
})

