const numBtn = document.querySelectorAll(".number")
const clrBtn = document.querySelector(".clear")
const operatorBtn = document.querySelectorAll(".operator")
const inputScrn = document.querySelector(".input1")


function add(arr){
additionSum = arr.reduce((acc, cur) => acc + cur, 0)
return additionSum
}

console.log(add([1,2,3,4]))

function subtract(a,b){
    return a -b
}
console.log(subtract(4,2))

function multiply(arr){
    multiplyTotal = arr.reduce((acc, cur) => acc * cur, 1)
    return multiplyTotal
}
console.log(multiply([2,3]))

function divide(arr){
    divideTotal = arr.reduce((acc, cur) => acc / cur)
    return divideTotal
}
console.log(divide([4,2]))

function operate(num1, num2){
    if(num1 - num2){
        subtract(num1, num2)
    } else if(num1 + num2){
        add(num1, num2)
    } else if (num1 * num2){
        multiply(num1, num2);
    } else if (num1 / num2){
        divide(num1, num2);
    }
}
console.log(operate([3 + 2]))

