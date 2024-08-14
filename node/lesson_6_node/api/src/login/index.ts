import express, { Request, Response } from "express"
const fs = require("node:fs")

const loginRouter = express.Router();
loginRouter.post("/login", (req: Request, res: Response, next) => {
    const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"))
    const { username, Password } = req.body
  
    
    console.log({ username, Password });
    if (!username || !Password) return res.status(400).send("Missing user name or password")
        else {
        
            const foundUser = users.find((user: { Password: any; username: any; }) =>  user?.Password === Password&& user.username === username) 
            console.log(foundUser);
            
           if (foundUser===undefined) {
            return res.send("error user name or passord incorect")
           }else{
            return res.send("success")
           }
             
            
        
}})

loginRouter.post("/register", (req: Request, res: Response, next) => { 
    const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"))
    const { username, Password } = req.body
    console.log(req.body+"ssss");
    
   
    if (!username || !Password) return res.status(400).send("Missing user name or password")
    else {
        users.push({ username, Password })
        fs.writeFileSync("./users.json", JSON.stringify(users))
      
        
        return res.status(200).json({ message: "user registered sababa" })
        
    }
})





export { loginRouter }