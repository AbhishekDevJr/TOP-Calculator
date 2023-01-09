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
            displayEle.textContent+= e.target.textContent;
        }
    });
}

let operatorUser = '';
let userValue1 = 0;
let userValue2;
let localResult = null;
//Logic to clear the Display when CE is clicked
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', (e) => {
    displayExpression = '';
    operatorUser = '';
    userValue1 = 0;
    userValue2;
    localResult = null;
    displayEle.textContent = displayExpression;
});


//Logic for functioning of Calculator Operations
const operatorButton = document.querySelectorAll('.operator-button');
for(i=0; i<operatorButton.length; i++){

    operatorButton[i].addEventListener('click', (e) => {

        displayEle.textContent += e.target.textContent;
        displayExpression = displayEle.textContent;
        if(displayExpression.indexOf('+') > -1 && (displayExpression.split('+')[1] !== '')){
            console.log('Entering Addition Block');
            if(localResult == null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('+')[0];
                userValue2 = displayExpression.split('+')[1];
                operatorUser = '+';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else{
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                let stringArray = displayExpression.split('+');
                userValue2 = stringArray[stringArray.length-2];
                operatorUser = '+';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
    
            
        }
        else if(displayExpression.indexOf('-') > -1 && (displayExpression.split('-')[1] !== '')){
            console.log('Entering Subtraction Block');
            if(localResult === null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('-')[0];
                userValue2 = displayExpression.split('-')[1];
                operatorUser = '-';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else {
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                console.log('Display Expression--> ' + displayExpression);
                let stringArray = displayExpression.split('-');
                userValue2 = stringArray[stringArray.length-2];
                operatorUser = '-';
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                console.log('userValue1--> ' + userValue1 + 'userValue2-->' + userValue2 + 'operatorUser--> ' + operatorUser);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            
        }
        else if(displayExpression.indexOf('x') > -1 && (displayExpression.split('x')[1] !== '')){
            console.log('Entering multiplication Block');
            if(localResult == null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('x')[0];
                userValue2 = displayExpression.split('x')[1];
                operatorUser = '*';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else{
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                let stringArray = displayExpression.split('x');
                userValue2 = stringArray[stringArray.length-2];
                operatorUser = '*';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            
        }
        else if(displayExpression.indexOf('%') > -1 && (displayExpression.split('%')[1] !== '')) {
            console.log('Entering Division Block');
            if(localResult == null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('%')[0];
                userValue2 = displayExpression.split('%')[1];
                operatorUser = '/';
                userValue1 = parseFloat(userValue1);
                userValue2 = parseFloat(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult.toFixed(8) + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else{
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                let stringArray = displayExpression.split('%');
                userValue2 = stringArray[stringArray.length-2];
                operatorUser = '/';
                userValue1 = parseFloat(userValue1);
                userValue2 = parseFloat(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult.toFixed(8) + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
           
        }
        
    });
}

//Logic for 'Equals(=)' Button
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', (e) => {
    displayEle.textContent += e.target.textContent;
        displayExpression = displayEle.textContent;
        if(displayExpression.indexOf('+') > -1 && (displayExpression.split('+')[1] !== '')){
            console.log('Entering Addition Block');
            if(localResult == null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('+')[0];
                userValue2 = displayExpression.split('+')[1];
                operatorUser = '+';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else{
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                let stringArray = displayExpression.split('+');
                userValue2 = stringArray[stringArray.length-2];
                operatorUser = '+';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
    
            
        }
        else if(displayExpression.indexOf('-') > -1 && (displayExpression.split('-')[1] !== '')){
            console.log('Entering Subtraction Block');
            if(localResult === null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('-')[0];
                userValue2 = displayExpression.split('-')[1];
                operatorUser = '-';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else {
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                console.log('Display Expression--> ' + displayExpression);
                let stringArray = displayExpression.split('-');
                userValue2 = stringArray[stringArray.length-2];
                operatorUser = '-';
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                console.log('userValue1--> ' + userValue1 + 'userValue2-->' + userValue2 + 'operatorUser--> ' + operatorUser);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            
        }
        else if(displayExpression.indexOf('x') > -1 && (displayExpression.split('x')[1] !== '')){
            console.log('Entering multiplication Block');
            if(localResult == null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('x')[0];
                userValue2 = displayExpression.split('x')[1];
                operatorUser = '*';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else{
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                let stringArray = displayExpression.split('x');
                userValue2 = stringArray[stringArray.length-2];
                operatorUser = '*';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            
        }
        else if(displayExpression.indexOf('%') > -1 && (displayExpression.split('%')[1] !== '')) {
            console.log('Entering Division Block');
            if(localResult == null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('%')[0];
                userValue2 = displayExpression.split('%')[1];
                operatorUser = '/';
                userValue1 = parseFloat(userValue1);
                userValue2 = parseFloat(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult.toFixed(8) + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else{
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                let stringArray = displayExpression.split('%');
                userValue2 = stringArray[stringArray.length-2];
                operatorUser = '/';
                userValue1 = parseFloat(userValue1);
                userValue2 = parseFloat(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                displayExpression = localResult;
                displayEle.textContent += localResult.toFixed(8) + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
           
        }
});

