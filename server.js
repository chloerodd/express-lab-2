const express = require("express");
const app = express();
const PORT = 3000;

app.get('/greeting/:name', (rq, res) =>{
    const name = req.params.name
    res.send("Hello" + name)
})

