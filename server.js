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

//magic 8 ball
app.get("/magic/:question", (req, res) =>{
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const answer = Math.floor(Math.random() * 20);
    const response = responses[answer]

    res.send(`<h1>The answer to your question is: ${response} </h1>`)
})


//soda countdown
app.get("/:sodas", (req, res) =>{
    const sodas = parseInt(req.params.sodas)
    if(soda >= 1){
        let num = soda -1;
res.send(`${soda} bottles of soda in the fridge <a href="http://localhost:3000/${num}">Take one...</a>`)
}
else {
    res.send(`we are out of soda <a href = "/99">play again?</a>`)
}
})
// listening...
app.listen(PORT, ()=>{
    console.log("listening on port 3000")
} );