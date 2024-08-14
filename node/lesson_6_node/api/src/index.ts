import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import addRequestId from "./middleware/addRequestId"
import logRequest from "./middleware/logRequest"
import cors from "cors"
import { accountRouter } from "./account"
import { infoRouter } from "./info"
import { loginRouter } from "./login"
import bodyParser from "body-parser"
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(addRequestId)
app.use(logRequest)

app.use("/", infoRouter)
app.use("/account", accountRouter)
app.use("/auth", loginRouter)


app.use((error: Error, req: Request, res: Response, next: NextFunction) => {

    console.log(error.message, res.getHeader("x-request-id"))
    res.status(500).send("Something went wrong!")
})

app.listen(process.env.API_PORT, () => {
    console.log(`Running on PORT: ${process.env.API_PORT}`)
})
