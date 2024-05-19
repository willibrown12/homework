// fetch Api
// HTTP requests
// Return a Promise
const API_URL = `https://www.omdbapi.com/?apikey=ffa5acbc&s=`
const API_URL_ID = `https://www.omdbapi.com/?apikey=ffa5acbc&plot=full&i=`
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
        console.log(moviesArray)
        draw(moviesArray)
        const result = moviesArray.reduce((acc, currentMovie) => {
            if (acc[currentMovie.Type]) {
                acc[currentMovie.Type] = acc[currentMovie.Type] + 1
            } else {
                acc[currentMovie.Type] = 1
            }
            return acc;
        }, {})
        console.log(result)

        const barColors = [
            "red",
            "yellow",
            "blue",
            "green",
            "pink",
            "purple"
        ];
        new Chart("moviesPieChart", {
            type: "pie",
            data: {
                labels: Object.keys(result),
                datasets: [{
                    backgroundColor: barColors,
                    data: Object.values(result)
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Movies distribution"
                }
            }
        });

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
    imdbID.classList.add("btn", "btn-success")
    const type = document.createElement("h5")
    const poster = document.createElement("img")

    imdbID.addEventListener("click", async () => {
        const result = await getImdbIdPlotApi(movie.imdbID)
        console.log(result)
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
async function getMoviesApi(movieSearch = "scream") {
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




const countries = [{ name: "israel", p: 8 }, { name: "usa", p: 150 }, { name: "russia", p: 200 }, { name: "china", p: 500 }]

countries.reduce((totalPopulation, currentCountry) => {
    totalPopulation = totalPopulation + currentCountry.p
    return totalPopulation
}, 0) 