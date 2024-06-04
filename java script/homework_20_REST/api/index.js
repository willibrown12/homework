const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())
// get all products 
// http://localhost:4500/
app.get("/add/:num1/:num2", function (req, res, next) {
    if (isNaN(req.params.num1)||isNaN(req.params.num2)){
        return  res.json("error no number")   
    }
    return  res.json(Number(req.params.num1)+Number(req.params.num2))
})


app.get("/sub/:num1/:num2", function (req, res, next) {
    if (isNaN(req.params.num1)||isNaN(req.params.num2)){
        return  res.json("error no number")   
    }
    return  res.json(Number(req.params.num1)-Number(req.params.num2))
})

app.get("/mul/:num1/:num2", function (req, res, next) {
    if (isNaN(req.params.num1)||isNaN(req.params.num2)){
        return  res.json("error no number")   
    }
    return  res.json(Number(req.params.num1)*Number(req.params.num2))
})

app.get("/div/:num1/:num2", function (req, res, next) {
    if (isNaN(req.params.num1)||isNaN(req.params.num2)){
        return  res.json("error no number")   
    }
    return  res.json(Number(req.params.num1)/Number(req.params.num2))
})

app.listen(4500)