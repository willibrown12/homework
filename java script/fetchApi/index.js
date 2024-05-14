// fetch Api
// HTTP requests
// Return a Promise
const API_URL = `https://www.omdbapi.com/?apikey=97fed692&s=`
const API_URL_ID = `https://www.omdbapi.com/?apikey=97fed692&s&plot=full&i=`
const API_URL_COUNTRIES = `https://restcountries.com/v3.1/all`

const loader = document.querySelector("#spinner")
const refreshMoviesButton = document.querySelector("#refreshMovies")
const searchButton = document.querySelector("#search-button")
const searchInput = document.querySelector("#search-input")

function initMovies() {
    searchButton.addEventListener("click", () => {
        loadMovies(searchInput.value)
    })
    refreshMoviesButton.addEventListener("click", () => {
        loadMovies()
    })
    loadMovies()
}
async function loadMovies(s) {
    try {
        clearData()
        loader.style.display = "block"
        const moviesArray = await getMoviesApi(s)
        draw(moviesArray)

    } catch (ex) {
        alert("Harel - application")
    } finally {
        loader.style.display = "none"
    }
}
function clearData() {
    document.querySelector("#movies-content").innerHTML = "";

}
function draw(Movies) {
    if (!Array.isArray(Movies)) return
    clearData();
    const moviesContainer = document.querySelector("#movies-content")
    const moviesCards = Movies.map(movie => getSingleMovie(movie))
    moviesContainer.append(...moviesCards)
}
function getSingleMovie(movie) {
    if (typeof movie !== 'object') return;
    const singleMovieDiv = document.createElement("div")
    singleMovieDiv.id = movie.imdbID
    singleMovieDiv.classList.add("singleMovieDiv")
    const title = document.createElement("h3")
    const year = document.createElement("h5")
    const imdbID = document.createElement("button")
   
    imdbID.classList.add("btn","btn-success")
    const type = document.createElement("h5")
    const poster = document.createElement("img")
    movie.isclicked=false
    imdbID.addEventListener("click", async () => {
        
         
        if ( movie.isclicked===true) {  
       const ELEMENT=document.getElementById(movie.imdbID+"aa")
       ELEMENT.remove()
        movie.isclicked=false
        console.log(movie.isclicked);

        } else {const result = await getImdbIdPlotApi(movie.imdbID)
            const collapse = document.createElement("div")
            collapse.setAttribute("id",movie.imdbID+"aa")
            collapse.className="overflow-y card card-body m-2"
            collapse.innerText=result
    
            singleMovieDiv.append(collapse)
            movie.isclicked=true
            console.log(movie.isclicked);
        }
        
    })

    title.innerText = movie.Title
    year.innerText = "Year: " + movie.Year
    imdbID.innerText = "imdbID: " + movie.imdbID
    type.innerText = "Type: " + movie.Type
    poster.src = movie.Poster

    singleMovieDiv.append(title, year, imdbID, type, poster)
    return singleMovieDiv
}
async function initCountries() {

    try {
        const countriesArray = await getCountriesApi()
        document.querySelector("#countries-length").innerText = `the number of countries is: ${countriesArray.length}`
    } catch (error) {

    }

}
async function getMoviesApi(movieSearch = "shrek") {
    const result = await fetch(API_URL + movieSearch, {
        method: "GET",
    })
    const data = await result.json()
    return data.Search;
}
async function getCountriesApi() {
    const result = await fetch(API_URL_COUNTRIES, {
        method: "GET",
    })
    const data = await result.json()
    return data;
}

async function getImdbIdPlotApi(id) {
    const result = await fetch(API_URL_ID + id, {
        method: "GET",
    })
    const data = await result.json()
    return data.Plot;
}



initMovies()
initCountries()



