const fs = require("node:fs")

function logger(msg) {
    const currentTime = new Date().toISOString()
    fs.appendFile("log.txt", `[${currentTime}] ${msg}\n`, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("write success")
        }
    })
}

module.exports = { logger }
