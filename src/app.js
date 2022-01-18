const path = require('path')
const express = require('express'); // returns a function


const app = express();

//set up config path and static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

//define paths of expres config
const viewsPath = path.join( __dirname, '../views' );

//set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

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