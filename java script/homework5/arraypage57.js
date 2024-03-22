let arr = [1, 2, 3, 4, 5, 10, 8, 6, 4, 2]
let swap = 0

for (let index = 0; index < (arr.length - 1) / 2; index++) {
    swap = arr[index]

    arr[index] = arr[(arr.length - 1) - index]
    console.log(arr[index]);

    arr[(arr.length - 1) - index] = swap



}
console.log(arr);



let input = [true, true, 1, 2, 3, 4, "s", "a", "!", "dkjhfd", () => { }, "aaaaa", 9375, {}, [], {}]
let nums = 0
let string = 0
let other = 0


for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === 'number' || typeof input[i] === 'string') {
        if (typeof input[i] === 'string') {
            string++
        }
        else { nums++ }
    }
    else {

        other++
    }


}
console.log("we have " + nums + " number" + " we have " + string + " strings" + " we have " + other + " others");





let poli = ["1", "A", 3, true, true, 3, "A","1"]
let itspoli = true



for (let a = 0; a < poli.length && itspoli === true; a++) {
    if (poli[a] === poli[poli.length - 1 - a]) {
        itspoli = true


    } else {
        itspoli = false
    }

}
if (itspoli === true) {
    console.log("the array is a polygrom");

} else { console.log("the array is not a polygrom"); }
