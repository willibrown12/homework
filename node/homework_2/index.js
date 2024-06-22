
const fs = require("node:fs")

function init() {

  
    showFile("../homework_2")
   deleteFile("../homework_2/b.txt")
 
    
   
    
}


function showFile(path){
    fs.readdir(path, "utf8", (err, files) => {
        if (err) {
           
            console.log(err)

        } else {
            console.log(files)
            
            
            
        }
    })

}

function deleteFile(path){
    fs.unlink(path, (err) => {
        if (err) {
           
            console.log(err)

        } else {
            console.log("\nDeleted file:path");
            showFile("../homework_2");
            
            
            
        }
    })

}


init()