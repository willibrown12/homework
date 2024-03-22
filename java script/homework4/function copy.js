let num1= +prompt("insert number here")
let num2= +prompt("insert number here")
let num3= prompt("insert equation here")


switch (num3) {
    case "+":
        console.log(num1+num2);
        break;
     case "-":
        console.log(num1-num2);
        break;
        case "*":
            console.log(num1*num2);
            break;
    default:
        console.log("broken");
        break;
}