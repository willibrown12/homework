


function init() {
    let selectedBooks = 0;
    const bookcardDiv = document.getElementById("userList")

    bookcardDiv.style.display = "flex"
    bookcardDiv.style.flexWrap = "wrap"
    bookcardDiv.style.justifyContent = "space-around"
    bookcardDiv.style.fontSize = "small"



    // create book ui 
    // var singleBook = books[0]
    // var singleBook2 = books[1]

    // books.forEach(function (currentBook) {

    // })



    for (let index = 0; index < users.length; index++) {


        const currentuser = users[index];
        const cardDiv = document.createElement("div")
        cardDiv.className = "card text-bg-light mb-3"
        cardDiv.style.width = "30rem"
        cardDiv.style.height = "13rem"


        cardDiv.style.margin = "10px"
        const row = document.createElement("div")
        row.className = "row g-0"


        const col1 = document.createElement("div")
        col1.className = "col-md-4 row"
        col1.style.alignItems = "center"

        const userimg = document.createElement("img")
        userimg.src = currentuser.picture.large
        userimg.className = "card-img-top"

        const col2 = document.createElement("div")
        col2.className = "col-md-8 "

        const cardbody = document.createElement("div")
        cardbody.className = "card-body cardbodycardbody "




        const user = document.createElement("h5")
        user.className = "card-header"
        user.innerText = currentuser.name.title + "." + currentuser.name.first + " " + currentuser.name.last
        const details = document.createElement("ul")
        details.className = "list-group list-group-flush"
        const email = document.createElement("li")
        email.className = "list-group-item"
        email.innerText = "Email: " + currentuser.email
        const age = document.createElement("li")
        age.className = "list-group-item"
        age.innerText = "Age: " + currentuser.dob.age
        const gender = document.createElement("li")
        gender.className = "list-group-item"
        gender.innerText = "Gender: " + currentuser.gender


        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary")
        button.innerText = "select"
        button.style.marginLeft = "60px"
        button.style.marginRight = "10px"
        button.style.marginTop = "1px"



        button.addEventListener("click", function () {

        })
        const buttonDelete = document.createElement("button");
        buttonDelete.classList.add("btn", "btn-danger")
        buttonDelete.innerText = "🗑️"

        buttonDelete.addEventListener("click", function () {
            cardDiv.remove()
        })



        col1.append(userimg)


        details.append(email, age, gender)
        cardbody.append(user, details, button, buttonDelete)
        col2.append(cardbody)
        row.append(col1, col2)
        cardDiv.append(row)

        bookcardDiv.append(cardDiv)

    }
}


init();



