const express = require("express")
const { logger } = require("./logger")
const bodyParser = require("body-parser")
const fs = require("node:fs")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(bodyParser.json())

let messages = [];

function loadMessagesFromFile() {
    fs.readFile("./log.txt", "utf8", (err, data) => {
        if (err) { console.log("error") }
        messages = data.split("\n")
    })
}
loadMessagesFromFile()


app.get("/message", (req, res, next) => {

    const message = req?.query?.message;
    messages.push(message)
    logger(message)
    res.json(messages)

})

app.post("/car", (req, res, next) => {
    const cars = JSON.parse(fs.readFileSync("./cars.json", "utf-8"))
    cars.push(req.body)
    fs.writeFileSync("./cars.json", JSON.stringify(cars))
    res.send("POST CAR!!!!!!-NOW CARS ARE SAVED IN FILE!!!")
})

app.get("/cars", (req, res, next) => {
    const cars = JSON.parse(fs.readFileSync("./cars.json", "utf-8"))
    res.json(cars)
})



app.post("/favorite", (req, res, next) => {
    const movies = JSON.parse(fs.readFileSync("./favorites.json", "utf-8"))
    movies.push(req.body)
    fs.writeFileSync("./favorites.json", JSON.stringify(movies))
    res.send("POST movie")
})

app.get("/favorite", (req, res, next) => {
    const movies = JSON.parse(fs.readFileSync("./favorites.json", "utf-8"))
    res.json(movies)
})






app.listen(4500)


// error handling
// http method
// middleware
// TS 