const path = require('path')
const express = require('express'); // returns a function


const app = express();
app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'Seth Zwerling'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about a dog',
        name: 'His name was Mr. Zwerling'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'We are here to help you.'
    })
})



app.get('/weather', (req, res) => {
    res.send({
        forecast: 'lots of rain',
        location: 'your moms house'
    })
})



app.listen(3000, () => {   //second argt is a callback function that runs when the server is up and running
    console.log('up and running')
})