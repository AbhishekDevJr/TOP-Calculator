//JS File to build the functionalities for the TOP-Calculator Project.
//Start by Creating functions to perform basic Calculator operations

//Function to perform Addition Operation
function add(value1, value2){
    return (value1 + value2);
}

//Function to perform Subtraction Operation
function subtract(value1, value2){
    return (value1 - value2);
}

//Function to perform Multiplication Operation
function multiply(value1, value2){
    return (value1 * value2);
}

//Function to perform Division Operation
function divide(value1, value2){
    return (value1 / value2);
}

//Checking Functions
// console.log('50+100--> ' + add(50, 100) + ' 50-100--> ' + subtract(50, 100) + ' 50*100--> ' + multiply(50, 100) + ' 50/100--> ' + divide(50, 100));

//Function that takes operator and two values and perform that operation on the values
function operate(operator, value1, value2){
    operator = operator + '';
    if(operator === '+'){
        return (add(value1, value2));
    }
    else if (operator === '-'){
        return (subtract(value1, value2));
    }
    else if (operator === '*'){
        return (multiply(value1, value2));
    }
    else if (operator === '/'){
        return (divide(value1, value2));
    }
    else{
        alert('Please check the values or operator.');
    }
}

//console.log(operate('+', 10, 15));

//Logic to pupulate the Calculator Display based on the button clicked.
let displayExpression = '';
const displayEle = document.querySelector('.calculator-display');
const allButtons = document.querySelectorAll('.number-button');
//Logic to Loops through each button(Node) in fetched nodelist and populated the display by their TextContent
for(let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener('click', (e) => {
        if(displayExpression.length > 16){
            alert("Could not add more digits or operators.");
            return;
        }else{
            console.log(e.target.textContent);
            displayExpression = displayExpression + e.target.textContent;
            displayEle.textContent = displayExpression;
        }
    });
}

//Logic to clear the Display when CE is clicked
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', (e) => {
    displayExpression = '';
    displayEle.textContent = displayExpression;
});

//Logic for functioning of Calculator Operations
const operatorButton = document.querySelector('.operator-button');

