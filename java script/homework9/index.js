let inputSearchValueGlobal = ""

function init(){
const bodyTable=document.getElementById("usersTable")
draw(users,bodyTable)
const addNewUserButton = document.getElementById("addNewUser")
addNewUserButton.addEventListener("click", function () {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const ageInput = document.getElementById("age");
    const imgInput = document.getElementById("img")
    const genderInput = document.getElementById("gender")
    const countryInput = document.getElementById("country")
    const isSingleInput = document.getElementById("isSingle")

    const user = {
        name: { first: firstNameInput.value, last: lastNameInput.value },
        email: emailInput.value,
        phone: phoneInput.value,
        dob: { age: ageInput.value },
        login: { username: `${firstNameInput.value}${Math.ceil(Math.random() * 9999)}` },
        picture: { large: imgInput.value },
        gender: genderInput.value,
        isSingle: isSingleInput.checked, // next lesson.
        location:{country:countryInput.value}
    }
    
   
    users.push(user)
    draw(users, bodyTable)
})
const searchButton = document.getElementById("searchInputbutton")
searchButton.addEventListener("click",function(){draw(search(users),bodyTable);})

const deletbutton = document.getElementById("deletallusers")
deletbutton.addEventListener("click",function(){draw(clearusers(users),bodyTable)})


}


function clearusers(arrayofusers) {
    arrayofusers.splice(0,users.length)
    

    
  
}
function draw(arrayofusers,bodyTable){
    bodyTable.innerHTML = "";
   if (arrayofusers===undefined) {
    return
   }
else{const usersUi=arrayofusers.map((currentuser=> GetSingleUserUi(currentuser)))
bodyTable.append(...usersUi)}
}


function GetSingleUserUi(user){


    const tdId = document.createElement("td")
    tdId.innerText = user?.login?.username

    const tdFirstName = document.createElement("td")
    tdFirstName.innerText = user?.name?.first

    const tdLastName = document.createElement("td")
    tdLastName.innerText = user?.name?.last

    const tdEmail = document.createElement("td")
    tdEmail.innerText = user?.email

    const tdPhone = document.createElement("td")
    tdPhone.innerText = user?.phone

    const tdAge = document.createElement("td")
    tdAge.innerText = user?.dob?.age

    const tdGender = document.createElement("td")
    tdGender.innerText = user?.gender
    const tdcountry = document.createElement("td")
    tdcountry.innerText = user?.location?.country

    const tdImage = document.createElement("td")
    const imgUser = document.createElement("img")
    imgUser.classList.add("user-image")
    imgUser.src = user?.picture?.large
    tdImage.append(imgUser)

    const trUser = document.createElement("tr")
    trUser.append(tdId, tdFirstName, tdLastName, tdEmail, tdPhone, tdAge, tdGender, tdImage,tdcountry)

    return trUser

}

function search(users) {
    const input = document.getElementById("searchInput") 
    const searchValue = input.value.toLowerCase()
    inputSearchValueGlobal = input.value
    const newUsers = users.filter(user => {
        const fullName = user.name.first.toLowerCase()+user.name.last.toLowerCase()
        return fullName.includes(searchValue);
    });
    
    return newUsers

   
    

}

init()