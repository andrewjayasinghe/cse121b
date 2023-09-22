/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    let sum = number1 + number2;
    return sum;
}


function addNumbers () {
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    let sum = add(number1,number2);
    document.querySelector('#sum').value = sum;

}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

const subtractionFunction = function subtract (subtract1, subtract2) {
    let diference = subtract1 - subtract2;
    return diference;
}

const subNum = function () {
    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);
    let diference = subtractionFunction(num1,num2);
    document.querySelector('#difference').value = diference;

}

document.querySelector('#subtractNumbers').addEventListener('click', subNum);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
    let val = number1 * number2;
    return val;
};

const multiplyNumbers = () => {
    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);
    let product = multiply(number1, number2);
    document.querySelector('#product').value = product;
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */ 

function divide (number1, number2) {
    let value = number1 / number2;
    return value;
}


function divideNumbers () {
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);
    let sum = divide(number1,number2);
    document.querySelector('#quotient').value = sum;

}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;


/* ARRAY METHODS - Functional Programming */


let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];


/* Output Source Array */
document.querySelector('#array').textContent = numbersArray.join(', ');


/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum,number) => sum+number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

const twiceArray = numbersArray.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = twiceArray.reduce((sum,number) => sum+number);