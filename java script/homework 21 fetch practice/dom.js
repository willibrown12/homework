
async function init() {
    const userList = document.querySelector("#userList")
    userList.className="bookcardDiv"

   const data =await getUsers()
   draw(data?.results)
    
}

async function getUsers() { try {

    const data= await fetch(`https://randomuser.me/api/?results=10`, {
        
    method: "get",
})
 const result= await data.json()
return result
    
} catch (error) {alert("something went wrong")
    
}
    
}
function draw(data) {
    if (!Array.isArray(data)) return
   console.log(data);
    const DrawUserUI =data.map(user =>getSingleuserUI(user))
    document.querySelector("#userList").append(...DrawUserUI)    
}


function  getSingleuserUI(user){

    if (typeof user !== 'object') return;
const cardDiv = document.createElement("div")
cardDiv.className = "card text-bg-light mb-3"
cardDiv.style.width = "29rem"
cardDiv.style.height = "14rem"


cardDiv.style.margin = "10px"
const row = document.createElement("div")
row.className = "row g-0"


const col1 = document.createElement("div")
col1.className = "col-md-4 row"
col1.style.alignItems = "center"

const userimg = document.createElement("img")
userimg.src = user?.picture?.large
userimg.className = "card-img-top"

const col2 = document.createElement("div")
col2.className = "col-md-8 "

const cardbody = document.createElement("div")
cardbody.className = "card-body cardbodycardbody "




const username = document.createElement("h6")
username.className = "card-header"
username.innerText =user?.name?.first + " " + user?.name?.last
const details = document.createElement("ul")
details.className = "list-group list-group-flush"
const email = document.createElement("li")
email.className = "list-group-item"
email.innerText = "Email: " + user?.email
const age = document.createElement("li")
age.className = "list-group-item"
age.innerText = "Age: " + user?.dob?.age
const gender = document.createElement("li")
gender.className = "list-group-item"
gender.innerText = "country: " + user?.location?.country

const button = document.createElement("button")
button.innerText="show country flag"
button.className="btn btn-primary m-2"
button.style.width="200px"
button.addEventListener("click", async () => {
    try { const data= await fetch(`https://restcountries.com/v3.1/all`, {
        
    method: "get",
})
 const result= await data.json()
 console.log(result);
 flagimg=result.filter(curent=>{
    if(curent?.name?.common===user?.location?.country){
        console.log(curent?.flags.png);
      if (userimg.src===curent?.flags?.png) {
        userimg.src = user?.picture?.large
        button.innerText="show country flag"
        button.className="btn btn-primary m-2"

      } else {
        userimg.src=curent?.flags?.png
        button.innerText="show user"
        button.className="btn btn-secondary m-2"
      } 
       
        }
       
           
    

    
    
    
 })

 
        
    } catch (error) {
        alert("ERROR")
    }
})


col1.append(userimg)


details.append(email, age, gender)
cardbody.append(username, details, button,)
col2.append(cardbody)
row.append(col1, col2)
cardDiv.append(row)

return  cardDiv

}


init();



