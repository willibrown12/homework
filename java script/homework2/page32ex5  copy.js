var num1 = Number(prompt("Enter your number"))
var num2 = num1 - 1
var primal = 1
var og=num1


while (primal === 1) {
   
   if (num1===1) {
      console.log(num1);
    num1 = Number(prompt("Enter your number"))
    num2 = num1 - 1;
   } else{if (num1===2) { primal = primal + 1
   
   
   }
   else { while (num1 % num2 !== 0) {
        
      num2 = num2 - 1
      if (num2 === 1) {
         primal = primal + 1
   
      }
   
   }
   if (primal === 1) {
      console.log(num1);
      num1 = Number(prompt("Enter your number"))

   }
}
   }
   
     
      
   
   
}
