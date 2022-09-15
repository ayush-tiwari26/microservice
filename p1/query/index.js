const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {randomBytes} = require('crypto');
const posts = {};

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/status', (req, res) => {
    res.send("Up and running");
})

app.get('/posts', (req,res)=>{
    res.send(posts);
})

app.post('/posts', (req,res)=>{
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    console.log(req.body);
    posts[id] = {
        id, title
    }
    res.status(201)
    res.send(posts[id]);
})

app.listen(4002, ()=>{
    console.log("Listining on 4002")
})