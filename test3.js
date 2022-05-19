const equalsBtn = document.querySelector('.equals')
const numBtn = document.querySelectorAll(".number")
const clrBtn = document.querySelector(".clear")
const operatorBtn = document.querySelectorAll(".operator")
const operatorArray = Array.from(operatorBtn)
const inputScrn = document.querySelector(".calcScreen")
const numberArray = Array.from(numBtn)
const calcInput = document.createElement('p');
const deleteNum = document.querySelector(`.backspace`)
calcInput.classList.add('calcInput');
inputScrn.appendChild(calcInput);


let displayValue = ``;
let operator = '';
let displayValue2 = ``;

const calculator ={
    add(a, b){
        value = parseInt(a + b);
        return value
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
        displayValue += args
        calcInput.textContent += `${args}`
        console.log(displayValue)
    }
    //If there is an operator button click = displayValue2
    if(operator === '+' || operator === '-'|| operator === '*'||operator === '/'|| operator === '!'){
        displayValue2 += args
        calcInput.textContent += `${args}`
        console.log(displayValue2)
    }
    if(displayValue.length === 25|| displayValue2.length ===25){
        calcInput.textContent = '1'
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
    } else if (operatorBtn.id === '/'){
        calcInput.textContent += `/`
        operator = '/' 
    } else if (operatorBtn.id === '!'){
        calcInput.textContent += `!`
        operator = '!' 
    }
}))
    

}
displayOperator()


function clear(){
    clrBtn.addEventListener('click', () =>{
        calcInput.textContent = ``
        displayValue = ``;
        displayValue2 = ``;
        operator = ``
})
}

clear();

function equals(){
equalsBtn.addEventListener('click', ()=>{
    if(operator !== ``){
        //console.log(operators(displayValue, operator, displayValue2))
        displayValue3 = parseInt(displayValue)
        displayValue4 = parseInt(displayValue2)
        result = operators(displayValue3, operator, displayValue4)
        //displayValue = parseInt(operators(displayValue, operator, displayValue2))
        calcInput.textContent = `${Math.round((result + Number.EPSILON) * 10)/10}`
        displayValue = result;
        displayValue2 = ``;
    }
    if(operator ===`/`&& displayValue4 === 0){
        alert('no :)')
        calcInput.textContent = ``
        displayValue = ``;
        displayValue2 = ``;
        operator = ``;
    }
   if(isNaN(result)){
        calcInput.textContent = `${displayValue3}`
        displayValue2 = ``;
        operator = ``;
   }
   if(result === undefined){
        calcInput.textContent = ``
        displayValue = ``;
        displayValue2 = ``;
        operator = ``;
   }
})
}
equals()

function backspace(){
    deleteNum.addEventListener('click', () =>{
        let len = document.querySelector(`.calcInput`).textContent.length -1;
        calcInput.textContent  = `${len}`
        console.log(len)
    
    })

}
backspace()

/*maybe writing an if statement so that if there is an operator then a 
value gets added to the second displayValue? */

//-= args