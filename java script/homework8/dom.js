
let inputSearchValueGlobal = ""



function init() {
    let selectedBooks = 0;
    const bookcardDiv = document.getElementById("userList")
    bookcardDiv.className="bookcardDiv"
   
    draw(users)
}

function search() {
    const input = document.getElementById("searchInput") //[input = ELEMENT INPUT FROM DOM]
    const searchValue = input.value.toLowerCase()
    inputSearchValueGlobal = input.value
    const newUsers = users.filter(user => {
        const fullName = user.name.first.toLowerCase()+user.name.last.toLowerCase()
        return fullName.includes(searchValue);
    });
    draw(newUsers)

}

function resetResult() {
    document.getElementById("searchInput").value = ""
    inputSearchValueGlobal = ""
    document.getElementById("male").checked =false
    document.getElementById("female").checked =false
   
    
    draw(users)

}

function genderFilter(){
    const input1=document.getElementById("male")
    const input2=document.getElementById("female")
    
   
    if(document.getElementById("male").checked === true){return input1.value}
    
    if(document.getElementById("female").checked === true){return input2.value}
    if(document.getElementById("female").checked === true){return input3.value}
}         
    


function clearusers() {
    //  reminder make it work
    // const htmlCollectionBooks = document.getElementById("booksList").children
    // document.getElementById("booksList").children.for
    // for (let index = 0; index < htmlCollectionBooks.length; index++) {
    //     htmlCollectionBooks[index].remove()
    // }
    document.getElementById("userList").innerHTML = "";
}


function draw(us) {
    // improve!
    let gender =genderFilter()
    clearusers()
    if(gender==="male"||gender==="female"){if(gender==="male"){ usersgender=us.filter(user =>user.gender==="male" );}
        
        else{usersgender=us.filter(user =>user.gender==="female" )};

}else{usersgender=us}


    const userData =usersgender.filter(user => {
        const fullName = user.name.first.toLowerCase()+user.name.last.toLowerCase()
        return fullName.includes(inputSearchValueGlobal);
    });
   
    const currentuserUI =  userData.map(user =>getSingleuserUI(user))
    document.getElementById("userList").append(...currentuserUI)
    updateSelecteduser(userData.filter(user =>user.isSelected === true))
    updateTotalResult(userData.length)
    
    
}
function updateTotalResult(userslenght) {
    document.getElementById("totalResult").innerHTML = `current users: ${userslenght}/${users.length}`
}
function  updateSelecteduser(arrayOfSelectedBooks) {
    const selectedBooksContainer = document.getElementById("selectedusersNumber")
    selectedBooksContainer.innerText = arrayOfSelectedBooks.length
}

function  getSingleuserUI(userData){

     if (typeof users !== 'object') return;
        const cardDiv = document.createElement("div")
        cardDiv.className = "card text-bg-light mb-3"
        cardDiv.style.width = "28rem"
        cardDiv.style.height = "14rem"


        cardDiv.style.margin = "10px"
        const row = document.createElement("div")
        row.className = "row g-0"


        const col1 = document.createElement("div")
        col1.className = "col-md-4 row"
        col1.style.alignItems = "center"

        const userimg = document.createElement("img")
        userimg.src = userData.picture.large
        userimg.className = "card-img-top"

        const col2 = document.createElement("div")
        col2.className = "col-md-8 "

        const cardbody = document.createElement("div")
        cardbody.className = "card-body cardbodycardbody "




        const user = document.createElement("h6")
        user.className = "card-header"
        user.innerText = userData.name.title + "." + userData.name.first + " " + userData.name.last
        const details = document.createElement("ul")
        details.className = "list-group list-group-flush"
        const email = document.createElement("li")
        email.className = "list-group-item"
        email.innerText = "Email: " + userData.email
        const age = document.createElement("li")
        age.className = "list-group-item"
        age.innerText = "Age: " + userData.dob.age
        const gender = document.createElement("li")
        gender.className = "list-group-item"
        gender.innerText = "Gender: " + userData.gender


        const button = document.createElement("button")
       
       
        if ( userData.isSelected === true) {
           
            cardDiv.className = "card text-bg-dark mb-3"
            button.className="btn btn-primary"
            button.innerText = "UnSelect"
        } else {

            cardDiv.className = "card text-bg-light mb-3"
            button.className="btn btn-secondary"
            button.innerText = "Select"
        }
        button.style.marginLeft = "40px"
        button.style.marginRight = "10px"
        button.style.marginTop = "10px"
        button.style.width="100px"
        
        button.addEventListener("click", function () {
            if ( userData.isSelected === true) {
                userData.isSelected = false;
                
            } else {
                userData.isSelected = true
               
            }
            draw(users)
        })

        const buttonDelete = document.createElement("button");
        buttonDelete.classList.add("btn", "btn-danger")
        buttonDelete.innerText = "delete"
        buttonDelete.style.marginTop = "10px"
        buttonDelete.addEventListener("click", function () {
            const foundIndex = users.findIndex(user => user.id.value===userData.id.value)
            if (foundIndex > -1) {
                users.splice(foundIndex, 1)
            }
            draw(users)
        })
    



        col1.append(userimg)


        details.append(email, age, gender)
        cardbody.append(user, details, button, buttonDelete)
        col2.append(cardbody)
        row.append(col1, col2)
        cardDiv.append(row)

        return  cardDiv
    }


init();



