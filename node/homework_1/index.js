
const { getUserApi } = require("./getUserApi")
const { logger } = require("./logger")
const { getdata } = require("./getdata")
const { timeout } = require("./dataMonitor")

async function init() {
    /* getdata() */

    timeout()
    /* logger("Start init")
    try {
       const result = await getUserApi()
       await logger("name- "+"getUserApi")
       await logger("status- "+result.status)
        const currentTime = new Date().toISOString()
        await logger("time- "+currentTime)
    } catch (error) {
        
    }
    await logger("Finish init")  */
}
init()