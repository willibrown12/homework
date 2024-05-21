function init() {
    const button = document.querySelector("#getCountries")
    button.addEventListener("click", async () => {
        try {

            const result = await fetch("https://restcountries.com/v3.1/all")
            // data returned from API 
            const data = await result.json()
            const LanguageAggregation = data.reduce((LanguageAgg, current) => {
                if (!current?.languages) return LanguageAgg
                languges = Object.values(current?.languages)
                
                if (!Array.isArray(languges)) return LanguageAgg
                languges.forEach(langugesvalue => {
                    if (LanguageAgg[langugesvalue]) {
                        LanguageAgg[langugesvalue] = LanguageAgg[langugesvalue] + 1
                    } else {
                        LanguageAgg[langugesvalue] = 1;
                    }
                });
                return LanguageAgg
            }, {})

            const entries=Object.entries(LanguageAggregation)
            entries.sort((a, b) => b[1] -a[1]);
            entries.splice(5,entries.length)
            const top5=entries.reduce((LanguageAgg,current)=> {
                LanguageAgg[current[0]]=current[1]
              
                return(LanguageAgg)

            },{})

        console.log(top5);
            const barColors = [
                "red",
                "yellow",
                "blue",
                "green",
                "pink",
                "purple",
                "black"
            ];

            chartElement = new Chart("populationBarChart", {
                type: "bar",
                data: {
                    labels: Object.keys(top5),
                    datasets: [{
                        label: "population",
                        data: Object.values(top5),
                        backgroundColor:barColors,
                    },
                   
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                          display: true,
                          ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 100,
                            stepSize: 20
                           }
                        }]
                      },
                }});
                console.log(chartElement);
           


        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    })

}

init()

// We want the following result
// {  "Europe": 152451224, "Asia": 46565468 ..... }
