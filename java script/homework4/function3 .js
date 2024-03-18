
function commission(nOfChecks, totalChecks){
    var com500=0
    var comAbove500=0
    var  sumcom=0
    var sumAll=0

    var ChecksComm=nOfChecks*0.10
    if(totalChecks>500){ com500=500*0.01
    comAbove500=(totalChecks-500)*0.015
    sumcom=com500+comAbove500
    sumAll=com500+comAbove500+ChecksComm

    return " the number of checks is: "+ nOfChecks +" the price for the checks is: "+ ChecksComm +" the price for the commision is: " + sumcom+ " the final price in $: " +sumAll}
    
    
    
    else{com500=totalChecks*0.01
        sumcom=com500+comAbove500
        sumAll=com500+comAbove500+ChecksComm
        return " the number of checks is: "+ nOfChecks +" the price for the checks is: "+ ChecksComm +" the price for the commision is: " + sumcom+ " the final price in $: " + sumAll
    }



}

var h1 = +prompt("numbers Of Checks")
var h2  = +prompt("total amount of money")


console.log(commission(h1,h2));