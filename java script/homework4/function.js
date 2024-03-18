

function score(home, away) {
    if (home >= away) {
        if (home === away) { return 1 }
        return 2


    } return 0
}



var home = NaN
var away = NaN
var result = 0




for (let index = 0; index < 3; index++) {

    while (isNaN(home)) {
        home = +prompt("insert home game score")

    }
    
    while (isNaN(away)) {
        away = +prompt("insert away game score")

    }

    result = result + score(home, away)

    home = NaN
    away = NaN
}
console.log("This is macabi points in the 3 games: " + result);


