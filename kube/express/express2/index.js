const axios = require('axios');
const express = require('express')

const URL = "http://express-1-cluster-ip:8081/"
const app = express();

app.get('/', (req, res) => {
    //call express 1 and get it's greeting msg
    let config = {
        method: 'get',
        url: URL,
        headers: {}
    };

    axios(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.send(
                "Hello from express2,"
                +"\n Message from express1 : "
                +JSON.stringify(response.data)
                );
        })
        .catch((error) => {
            console.log(error);
        });
})

app.listen(4002, () => {
    console.log("Express2 Listening on Port 4002")
})
