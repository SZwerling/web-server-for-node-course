const path = require('path');
const express = require('express'); // returns a function
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
//web-server\src\utils\geocode.js


const app = express();

//set up config path and static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

//define paths of expres config
const viewsPath = path.join( __dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

//set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Seth Zwerling'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Seth Zwerling'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'We are here to help you.',
        title: 'Help',
        name: 'Seth Zwerling'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address.'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if(error){
            return res.send({ error: error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                res.send({ error: error })
            }

            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            })
        })
    })
})


app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term.'
        })
    }
    
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Seth Zwerling',
        message: 'Help article not found.'

    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title : '404',
        name: 'Seth Zwerling',
        message: 'Page not found.'
    })
})

app.listen(3000, () => {   //second argt is a callback function that runs when the server is up and running
    console.log('up and running')
})