const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const express = require('express');

const app = express();
app.use(bodyParser.json());
const commentedByPostId = {};

app.get("/posts/:id/comments", (req,res)=>{
    const {id} = req.params;
    const commentId = randomBytes(4).toString('hex');
    res.send(commentedByPostId[id] || []);    
})

app.post("/posts/:id/comments", (req,res)=>{
    const {id} = req.params;
    commentedByPostId[id] = req.body;
    commentedByPostId[id].id = randomBytes(4).toString('hex');
    res.status(201).send(commentedByPostId[id]);
})

app.listen('4001', ()=>{
    console.log('Listening on port 4001');
})