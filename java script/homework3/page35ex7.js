var num1 = +prompt("insert number here")
for (let index = 1; index <= num1; index++) {
console.log(index);
console.log(index * 2);


}


var num2 = +prompt("insert number here")
var total4=0
var total7=0
for (let index2 = 0; index2 <= num2; index2++) {
 if (index2%4===0) {
total4=total4+index2 
}
if (index2%7===0) {
 total7=total7+index2 
 }

}
console.log(total7 + total4);

