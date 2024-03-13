var num1 = Number(prompt("Enter your number"))
var temp=0
var newnum=0
var num2=num1
while (num1!==0) {
    temp=num1%10
    console.log(temp)
    newnum=(newnum*10)+(temp*10)
    console.log(newnum)
    num1=parseInt(num1/10)
    
}
console.log(num2)
if (num2%10===0) {console.log("0"+newnum/10)
    
} 
else{console.log(newnum/10)}





