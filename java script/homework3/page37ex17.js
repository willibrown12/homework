var count = +prompt("insert number here")
var dcount=0
var max=0
var indexmax=0
var indexmaxc=1

for (let index = 1; index <= count; index++) {
    dcount = +prompt("insert number here")
    if (dcount > max) {
      max=dcount
      indexmax=index  
    }
    
    if (dcount === max &&indexmax!==index) {
        indexmaxc++
      
      }

}

console.log("the is the max number: "+max + " this is his first location: "+indexmax+" this is how many times it entered: "+indexmaxc);








var count = +prompt("insert number here")
var max=0
for (let index = 1; index <= count; index++) {
  dcount = +prompt("insert number here")
  if (dcount > max) {
    max=dcount
      
  }
  
}