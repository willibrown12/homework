
function avgUntil0(num1,num2,num3,num4) {
    if (isNaN(num1)|| isNaN(num2)||isNaN(num3)||isNaN(num4)) {
        return "there was invalid number inside the info"
        
    }else{
    if (num1===0) {return "no avrage first number was 0"
        
    }else {if (num2===0) {return "the avrage until zero is: " +num1
        
    }else {if (num3===0) { return "the avrage until zero is: "+(num1+num2)/2
        
    }else {if (num4===0) {return "the avrage until zero is: "+(num1+num2+num3)/3
        
    }else {return "the avrage is: "+(num1+num2+num3+num4)/4}
}}}}
    
}


var h1 = +prompt("insert home game score")
var h2  = +prompt("insert home game score")
var h3  = +prompt("insert home game score")
var h4  = +prompt("insert home game score")

console.log(avgUntil0(0,1,2,3));
console.log(avgUntil0(10,0,2,3));
console.log(avgUntil0(10,1,0,3));
console.log(avgUntil0(10,5,3,10));
console.log(avgUntil0(10,"d",3,10));
console.log(avgUntil0(h1,h2,h3,h4));