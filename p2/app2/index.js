const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("Hello World From APP2");
})

app.listen(4000, (e)=>{
    console.log("Listening on Port 4000");
})
