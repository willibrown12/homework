
var indexsuc = 0
var sum=0

for (let index3 = 0; index3 < 5; index3++) {
    var name1 = prompt("insert name here")
    var grade = +prompt("insert number here")
    if (grade >= 70) {
        console.log(name1);
        sum = sum + grade
        indexsuc++
    }

}
if (sum > 0) { console.log(sum / indexsuc); }
