var data=""

function init() {
    const button = document.querySelector("#getCountries")
    button.addEventListener("click", async () => {
 
        try {
           
            const get_token = await fetch('https://accounts.spotify.com/api/token', {
                method: "POST",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa("e2d2f55d610b48658f3dcfb053c7d136" + ':' + "9992563abccf43dbbd6c45bdd46392ab")
                  },
                  body: 'grant_type=client_credentials'
            })
              data= await get_token.json()
             const finaldata=sortPopularity(await arrayOfArtist());
             
             const finalgetimages=(await arrayOfArtistiamges())
             const barColors = [
                "red",
                "yellow",
                "blue",
                "green",
                "pink",
                "purple",
                "black",
                "lime"
            ];

            chartElement = new Chart("artistpopchart", {
                type: "bar",
                data: {
                    labels: Object.keys(finaldata), 
                    datasets: [{
                        label: "avrage popularity of artist most succesful tracks",
                        data: Object.values(finaldata),
                        backgroundColor: barColors,
                    },
                    
                    ]
                },
                options: {
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  },
                })
                
          


        } catch (error) {
            
        }
})}




async function  arrayOfArtist() {
    try {
        const artist=["7dGJo4pcD2V6oG8kP0tJRR","3q7HBObVc0L8jNeTe5Gofh","3nFkdlSjzX9mRTtwJOzDYB","5K4W6rqBFWDnAN6FQUkS6x","4MCBfE4596Uoi2O4DtmEMz","6l3HvQ5sa6mXTsMTB19rO5","3TVXtAsR1Inumwj472S9r4","2YZyLoL8N0Wb9xBt1NhZWg"]
const atristtoptracks =[]
for (let index = 0; index < artist.length; index++) {
    const element = artist[index];
    const ArtistAlbum= await fetch("https://api.spotify.com/v1/artists/"+element+"/top-tracks ", {
        
    method: "get",
    headers: {
        'Authorization': 'Bearer '+data.access_token
      },
})
 const dataalbum= await ArtistAlbum.json()
  atristtoptracks.push(dataalbum)
}
return  atristtoptracks
    } catch (error) {
        console.error(error);
    }
    
    
}

async function  arrayOfArtistiamges() {
    try {
        const artist=["7dGJo4pcD2V6oG8kP0tJRR","3q7HBObVc0L8jNeTe5Gofh","3nFkdlSjzX9mRTtwJOzDYB","5K4W6rqBFWDnAN6FQUkS6x","4MCBfE4596Uoi2O4DtmEMz","6l3HvQ5sa6mXTsMTB19rO5","3TVXtAsR1Inumwj472S9r4","2YZyLoL8N0Wb9xBt1NhZWg"]
const atristtoptracks =[]
for (let index = 0; index < artist.length; index++) {
    const element = artist[index];
    const ArtistAlbum= await fetch("https://api.spotify.com/v1/artists/"+element, {
        
    method: "get",
    headers: {
        'Authorization': 'Bearer '+data.access_token
      },
})
 const dataalbum= await ArtistAlbum.json()
  atristtoptracks.push(dataalbum)
}
console.log(atristtoptracks);
return  atristtoptracks
    } catch (error) {
        console.error(error);
    }
    
    
}



function getimages(arrayOfArtist) {
    const artistavgpop=arrayOfArtist.reduce((popAgg, current) =>{
                popAgg[current.name]=current.images[0].url
             console.log(popAgg);
            return popAgg
        }, {})

return artistavgpop
}

    

function sortPopularity(arrayOfArtist) {
    const artistavgpop=arrayOfArtist.map(artist =>{
        const avrage=artist.tracks.reduce((popAgg, current) => {
            if (popAgg[current.artists[0].name]) {
                popAgg[current.artists[0].name] = popAgg[current.artists[0].name]+current.popularity
            } else {
                popAgg[current.artists[0].name] = current.popularity;
            }
           ;
           
           ;
            return popAgg
        }, {})
      return avrage
    })
    ;
   
    const lala=artistavgpop.map(curent=>sumArrayandavrage(Object.values(curent)))
   
    const blabla=artistavgpop.map(curent=>Object.keys(curent).reduce(function(a, b){ return curent[a] > curent[b] ? a : b }));
    
    var r = {},
    i,
    keys =blabla,
    values =lala;

for (let i = 0; i < keys.length; i++) {
    r[keys[i]] = values[i];
}
return r
}

function sumArrayandavrage(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    
    brotal=total/10
   
    return brotal;
  }
 
init()

