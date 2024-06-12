const fs = require("node:fs")

async function logger(msg) {
    
    fs.appendFile("log.txt", `${msg}\n`, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("write success")
        }
    })
}

module.exports = { logger }
