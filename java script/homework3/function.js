function sum2n(num1, num2) {
    return (num1 + num2)

}


function max2n(num1, num2) {
    if (num1 >= num2) {
        return num2

    } else return num1

}


function min3n(num1, num2, num3) {
    if (num1 >= num2) {
        if (num2 >= num3) {
            return num3

        } else return num2

    } else if (num1 >= num3) { return num3 }
    else return num1

}

function score(home,away) {
    if (home >= away) { if(home===away){return 1}
        return 2
       

    } return 0

    
}
function isApple(word1,word2){

    if (word1==="apple"|| word2==="apple") {return true
        
    } return  false
}



    




console.log(sum2n(10, 10));
console.log(max2n(5, 4));
console.log(min3n(8, 9, 6));
console.log(isApple("orange","apple"));
console.log("this is macabi telaviv points for now: "+(score(91, 90)+score(90, 91)+score(91, 91)));



