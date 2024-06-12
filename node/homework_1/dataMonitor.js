const { json } = require("node:stream/consumers");
const { getUserApi } = require("./getUserApi")
const { logger } = require("./logger")


function timeout() {
new Promise(() => setTimeout(() => {
    timeoutlog(); 
    timeout()
}, 10000));}

async function timeoutlog() {
    logger("Start init")
    try {
       const result = await getUserApi()
       
       await logger("status- "+result.status)
        const currentTime = new Date().toISOString()
        await logger("time- "+currentTime)
        const resultData=await result.json()
       await logger("name- "+resultData.results[0].name?.first+" "+resultData.results[0].name?.last)
    } catch (error) {
        
    }
    await logger("Finish init") 
}


module.exports = { timeout }