const express = require("express")
const ourApp = express()
ourApp.use(express.urlencoded({ extended: false }))

ourApp.get("/", function (req, res) {
    res.send(`
        <form action="/answer" method="POST">
            <p>What color is the sky on a clear and sunny day?</p>
            <input type="text" name="sky">
            <button>Submit</button>
        </form>
    `)
})

ourApp.post("/answer", function (req, res) {
    if (req.body.sky.toUpperCase() == "BLUE") {
        res.send(`
            <p>You got it!</p>
            <a href="/">Back to home</a>
        `)
    } else {
        res.send(`
            <p>What!?</p>
            <a href="/">Back to home</a> 
        `)
    }
})

ourApp.listen(3000)