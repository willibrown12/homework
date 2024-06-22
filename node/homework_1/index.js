
const { getdata } = require("./getdata")
const { timeout } = require("./dataMonitor")

async function init() {
    getdata()

    timeout()
   
}
init()