const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World from express1")
})

app.listen(4001, () => {
    console.log("Express1 Listening on Port 4001")
})