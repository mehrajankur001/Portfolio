if (process.env.NODE_ENV !== 'procuction') {
    require('dotenv').config()
}
const express = require('express')



const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.listen(process.env.PORT)