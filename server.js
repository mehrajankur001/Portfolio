const { static } = require('express')
const express = require('express')

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.listen(2222)