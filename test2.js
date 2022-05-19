const equalsBtn = document.querySelector('.equals')
const numBtn = document.querySelectorAll(".number")
const clrBtn = document.querySelector(".clear")
const operatorBtn = document.querySelectorAll(".operator")
const operatorArray = Array.from(operatorBtn)
const inputScrn = document.querySelector(".calcScreen")
const numberArray = Array.from(numBtn)
const calcInput = document.createElement('p');
calcInput.classList.add('calcInput');
inputScrn.appendChild(calcInput);

let displayValue = 0;
let operator = '';
let displayValue2 = 0;

function add(a, b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a, b){
    return a / b
}

function factorial(num1){
    let total = 1;
    let newArray = [];
    for(let i = num1; i > 0; i--){
      newArray.push(i);
    }
    //set ! button onclick = to this function, probably keydown too
    const factorialTotal = newArray.reduce((element1, element2) => element1 * element2, total)
    return factorialTotal
}

function operate(num1, operator, num2){
    if(operator === '-'){
        return subtract(num1, num2)
    } else if(operator === '+'){
        return add(num1, num2)
    } else if (operator === '*'){
       return multiply(num1, num2);
    } else if (operator === '/'){
       return divide(num1, num2);
    } else if (operator === '!'){
        return factorial(num1)
    }
}

//displays numbers on press!
function  displayCalc(...args){
        calcInput.textContent = `${args}`
        displayValue = args
    }

function displayOperator(){
    operatorArray.forEach(operatorBtn => operatorBtn.addEventListener('click', ()=>{
        if(operatorBtn.id === '+'){
            calcInput.textContent += `+`
            operator += '+' 
            displayValue += displayValue
            console.log(operator)
        } else if(operatorBtn.id === '-'){
            calcInput.textContent += `-`
            operator += `-`
        } else if(operatorBtn.id === '*'){
            calcInput.innerHTML += `*`
            operator += `*`
        } else if (operatorBtn.id === '/'){
            calcInput.textContent += `/`
            operator += '/' 
        } else if (operatorBtn.id === '!'){
            calcInput.textContent += `!`
            operator += '!' 
 
            
            
        }
    }))
}
displayOperator()


function clear(){
    clrBtn.addEventListener('click', () =>{
        window.location.reload();
    })
}

clear();

function equals(){
    equalsBtn.addEventListener('click', ()=>{
        calcInput.textContent = `${operate(displayValue, operator, displayValue2)}`
        console.log(operate(displayValue, operator))
    })
}
equals()









//1 keycode 49 + keycode 187 