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
let displayValue2 =0;

const calculator ={
    add(a, b){
        return a + b
    },
    subtract(a, b){
        return a - b
    },
    multiply(a, b){
      return a * b;
    },
    divide(a, b){
        return a / b
    },
    factorial(a){
        let total = 1;
        let array = [];
        for (i = a; i >0; i--){
            array.push(i)
        } 
    const factorialTotal = array.reduce((acc, cur) => acc * cur, total)
    return factorialTotal
    }
}

function operators(num1, operator, num2){
    if(operator === '-'){
        return calculator.subtract(num1, num2)
    } else if(operator === '+'){
        return calculator.add(num1, num2)
    } else if (operator === '*'){
       return calculator.multiply(num1, num2);
    } else if (operator === '/'){
       return calculator.divide(num1, num2);
    } else if (operator === '!'){
        return calculator.factorial(num1)
    }
}
console.log(operators(4, '!'))

function  displayCalc(args){
    //if there is no operator button click = displayValue
if(operator === `` || operator === '.'){
        displayValue = args
        calcInput.textContent += `${args}`
        console.log(displayValue)
    }
    //If there is an operator button click = displayValue2
    if(operator === '+' || operator === '-'|| operator === '*'||operator === '/'|| operator === '!'){
        displayValue2 = args
        calcInput.textContent += `${displayValue2}`
        console.log(displayValue2)
    }
}

function displayOperator(){
operatorArray.forEach(operatorBtn => operatorBtn.addEventListener('click', ()=>{
    if(operatorBtn.id === '+'){
        calcInput.textContent += '+'
        operator = '+' 
        console.log(operator)
    } else if(operatorBtn.id === '-'){
        calcInput.textContent += `-`
        operator = `-`
    } else if(operatorBtn.id === '*'){
        calcInput.innerHTML += `*`
        operator = `*`
        displayValue2 += 1;
    } else if (operatorBtn.id === '/'){
        calcInput.textContent += `/`
        operator = '/' 
    } else if (operatorBtn.id === '!'){
        calcInput.textContent += `!`
        operator = '!' 
    } else if (operatorBtn.value === '.'){
        calcInput.textContent += `.`
        operator = '.' 
    }
}))

}
displayOperator()


function clear(){
    clrBtn.addEventListener('click', () =>{
        calcInput.textContent = ``
        displayValue = 0;
        displayValue2 = 0;
        operator = ``
})
}

clear();

function equals(){
equalsBtn.addEventListener('click', ()=>{
    if(operator !== ``){
        console.log(operators(displayValue, operator, displayValue2))
        displayValue = operators(displayValue, operator, displayValue2)
        calcInput.textContent = `${displayValue}`
    }
    if(operator === ``){
        calcInput.textContent =`${displayValue}`
    }
    
    
})
}
equals()

/*maybe writing an if statement so that if there is an operator then a 
value gets added to the second displayValue? does that sound like a plan*/