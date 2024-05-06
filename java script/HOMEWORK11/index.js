// fetch Api
// HTTP requests
// Return a Promise


function init() {
    const movieList=document.getElementById("movieList")
    const button = document.querySelector("#search")
    button.addEventListener("click", async () => {
        try {
            const searchresult= document.getElementById("searchInput")
            document.querySelector("#spinner").style.display = "block"
            console.log("https://www.omdbapi.com/?apikey=97fed692&s="+searchresult.value);
            const result = await fetch("https://www.omdbapi.com/?apikey=97fed692&s="+searchresult.value)
            // data returned from API 
            const data = await result.json()
            console.log(data);
            draw(data,movieList)
            document.querySelector("#spinner").style.display = "none"
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    })
    
}



function draw(data,moviediv){
    moviediv.innerHTML = "";
   if (data===undefined) {
    return
   }
else{const usersUi=data?.Search.map((currentmovie=> getSingleuserUI(currentmovie)))
    console.log(usersUi);
    moviediv.append(...usersUi)}
}


function  getSingleuserUI(currentmovie){

    if (typeof currentmovie !== 'object') return;
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

       const movieimg = document.createElement("img")
       movieimg.src = currentmovie?.Poster
       movieimg.className = "card-img-top"

       const col2 = document.createElement("div")
       col2.className = "col-md-8 "

       const cardbody = document.createElement("div")
       cardbody.className = "card-body cardbodycardbody "




       const title = document.createElement("h6")
       title.className = "card-header"
       title.innerText = currentmovie?.Title
       const details = document.createElement("ul")
       details.className = "list-group list-group-flush"
       const year = document.createElement("li")
       year.className = "list-group-item"
       year.innerText = "year: " + currentmovie?.Year
       
       col1.append(movieimg)


       details.append(year)
       cardbody.append(title, details)
       col2.append(cardbody)
       row.append(col1, col2)
       cardDiv.append(row)

       return  cardDiv
      
}
       
    



init()

