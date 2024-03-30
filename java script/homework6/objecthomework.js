function GetMovie() {
    var movie={movieName:"" , rating:0}
    var getmovie=0
    var getrating= NaN 
     getmovie= prompt("put a name for the movie")
       while(isNaN(getrating)||getrating>10)
       { getrating=+prompt("put rating for the movie")}
       movie.movieName=getmovie
       movie.rating= getrating
       return movie
         
    
}
function pushMovie(){
    var result
    var moviesarr=[]
    for (let index = 0; index <3; index++) {
        result=GetMovie()
     
      moviesarr.push(result)
     
    }

return moviesarr


}


function movieHigherRating(prating,movieList){
var movieListNg=[]

if (isNaN(prating)) { return "invalid"
    
}
for (let index = 0; index < movieList.length; index++) {
    var currentmovie = movieList[index];
    if (currentmovie.rating>prating) {
        movieListNg.push(currentmovie)
    }
    
}

return movieListNg
}


function moviedeletebyname(moviename,movieList){
    
    
    for (let index = 0; index < movieList.length; index++) {
        var currentmovie = movieList[index];
        
        if (currentmovie.movieName.toLowerCase()=== moviename.toLowerCase()) {
            movieList.splice(index,1)
        }
        
    }
    
    return movieList
    }

    
var movie=[{movieName:"shrek" , rating:2},
{movieName:"shrek 2" , rating:4},
{movieName:"shrek 3" , rating:7},
{movieName:"shrek 4" , rating:9}
]

movie=[...movie, ...pushMovie()]




var higherThenRating = movieHigherRating(+prompt("rating you want to check"),movie)
console.log(higherThenRating);

var moviedeleted = moviedeletebyname(prompt("movie you want to delete"),movie)
console.log(moviedeleted);