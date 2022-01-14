const path = require('path')
const express = require('express'); // returns a function


const app = express();
app.use(express.static(path.join(__dirname, '../public')))



app.get('/weather', (req, res) => {
    res.send({
        forecast: 'lots of rain',
        location: 'your moms house'
    })
})



app.listen(3000, () => {   //second argt is a callback function that runs when the server is up and running
    console.log('up and running')
})