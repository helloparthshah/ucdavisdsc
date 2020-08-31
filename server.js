const express = require('express')
const app = express()
const port = process.env.PORT || "3000";
var path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/teams.html'))
})

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/teams.html'))
})

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/wksp.html'))
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})