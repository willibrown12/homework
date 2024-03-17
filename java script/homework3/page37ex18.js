var amount = +prompt("insert number here")
var damount = 0
var max = 0
var max2 = 0
var indexmax = 0
var indexmax2 = 0


for (let index = 1; index <= amount; index++) {
    
    damount = +prompt("insert number here")

   

    if (damount>max ) {
            max2=max
            max = damount
            indexmax2=indexmax
            indexmax=index
           

       


    } else if (max2 < max && damount > max2) {
        max2 = damount
        indexmax2=index
       
        

    }
    



}


console.log("the second max number: " + max2 + " this is his last location: " + indexmax2 );
