const express = require("express");
const app = express();
const PORT = 3000;

app.get('/greeting/:name', (rq, res) =>{
    const name = req.params.name
    res.send("Hello" + name)
})

//tip calc
app.get("/tip/:total/:percentage", (req, res) =>{
    const total = req.params.total
    const tipPercentage =  req.params.percentage/100
    const tipAmount = total * tipPercent
    res.send("your tip amount is $" + tipAmount)
})