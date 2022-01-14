const express = require('express'); // returns a function

const app = express();

app.get('', (req, res) => {              //configures what app should do when someone attempts to 
    res.send('<h1>weather</h1>')           //get resource at a specific url
})

app.get('/help', (req, res) => {
    res.send({
        myName: 'Slim',
        age: 46
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>The About Page</h1>')
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