const express = require("express")

const app = express()

app.get("/test", (request, response, next) => {
    console.log(request.ip)
    return response.send("All Good!")
})


const users = [{ user: "adi", pass: "abc123" },
{ user: "Orel", pass: "aaabbb" },
{ user: "michal", pass: "manahama" }]

app.get("/users", (req, res, next) => {
    return res.json(users.map(u => u.user))
})

app.get("/user-exist/:user", (req, res, next) => {
    const user = req.params.user
    const findUser = users.find(u => u.user.toLowerCase() === user.toLowerCase())
    if (findUser) {
        return res.send(true)
    } else {
        return res.send(false)
    }
})
app.get("/user-exist", (req, res, next) => {
    const user = req?.query?.user
    const findUser = users.find(u => u.user.toLowerCase() === user.toLowerCase())
    if (findUser) {
        return res.send(true)
    } else {
        return res.send(false)
    }
})



app.listen(3500, () => {
    console.log("Listening to PORT, API Is working 3500")
})

