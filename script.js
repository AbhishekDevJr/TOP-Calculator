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
    //console.log('--> ' + displayEle.textContent + '--> ');
    allButtons[i].addEventListener('click', (e) => {
        if(displayExpression.length > 16){
            alert("Could not add more digits or operators.");
            return;
        }else{
            displayEle.textContent+= e.target.textContent;
            //console.log(displayEle.textContent);
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
let operatorUser = '';
let userValue1 = 0;
let userValue2;
let localResult = null;
const operatorButton = document.querySelectorAll('.operator-button');
//console.log(operatorButton);
for(i=0; i<operatorButton.length; i++){
    //console.log('--> ' + displayEle.textContent + '--> ');
    operatorButton[i].addEventListener('click', (e) => {

        //console.log(displayEle.textContent + '<-->' + e.target.textContent);
        displayEle.textContent += e.target.textContent;
        displayExpression = displayEle.textContent;
        //console.log(displayEle.textContent);
        
        if(displayExpression.indexOf('+') > -1 && (displayExpression.split('+')[1] !== '')){
            if(localResult == null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('+')[0];
                userValue2 = displayExpression.split('+')[1];
                operatorUser = '+';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                console.log( 'userValue1-->' + userValue1 + 'userValue2-->' + userValue2 + 'operatorUser' + operatorUser + 'localResult-->' + localResult);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            //console.log(typeof(displayEle.textContent));
            }
            else{
                //New Logic
                displayEle.textContent = '';
                console.log(localResult);
                userValue1 = localResult;
                userValue2 = displayExpression.split('+')[1];
                operatorUser = '+';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                console.log( 'userValue1-->' + userValue1 + 'userValue2-->' + userValue2 + 'operatorUser' + operatorUser + 'localResult-->' + localResult);
                displayExpression = localResult;
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            //console.log('getting inside if block');
            
        }
        else if(displayExpression.indexOf('-') > -1 && (displayExpression.split('-')[1] !== '')){
            if(localResult === null){
                //Original Logic
                //console.log('getting into original logic');
                displayEle.textContent = '';
                userValue1 = displayExpression.split('-')[0];
                userValue2 = displayExpression.split('-')[1];
                operatorUser = '-';
                userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                //console.log('param1--> ' + userValue1 + 'param2--> ' + userValue2 + 'param3--> ' + operatorUser);
                localResult = operate(operatorUser, userValue1, userValue2);
                console.log( 'userValue1-->' + userValue1 + 'userValue2-->' + userValue2 + 'operatorUser' + operatorUser + 'localResult-->' + localResult);
                displayExpression = localResult;
                //console.log(localResult + typeof(localResult));
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else {
                //New Logic
                //console.log('getting into new logic');
                //console.log(displayEle.textContent);
                displayEle.textContent = '';
                userValue1 = localResult;
                let lastIndex = displayExpression.lastIndexOf('-');
                //console.log(displayExpression);
                userValue2 = displayExpression[lastIndex - 1];
                operatorUser = '-';
                //userValue1 = parseInt(userValue1);
                userValue2 = parseInt(userValue2);
                //console.log('param1--> ' + userValue1 + 'param2--> ' + userValue2 + 'param3--> ' + operatorUser);
                localResult = operate(operatorUser, userValue1, userValue2);
                console.log( 'userValue1-->' + userValue1 + 'userValue2-->' + userValue2 + 'operatorUser' + operatorUser + 'localResult-->' + localResult);
                displayExpression = localResult;
                //console.log(localResult + typeof(localResult));
                displayEle.textContent += localResult + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            
        }
        else if(displayExpression.indexOf('x') > -1 && (displayExpression.split('x')[1] !== '')){
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
                userValue2 = displayExpression.split('x')[1];
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
            if(localResult == null){
                //Original Logic
                displayEle.textContent = '';
                userValue1 = displayExpression.split('%')[0];
                userValue2 = displayExpression.split('%')[1];
                operatorUser = '/';
                userValue1 = parseFloat(userValue1);
                userValue2 = parseFloat(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                console.log( 'userValue1-->' + userValue1 + 'userValue2-->' + userValue2 + 'operatorUser' + operatorUser + 'localResult-->' + localResult);
                displayExpression = localResult;
                displayEle.textContent += localResult.toFixed(8) + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
            else{
                //New Logic
                displayEle.textContent = '';
                userValue1 = localResult;
                userValue2 = displayExpression.split('%')[1];
                operatorUser = '/';
                userValue1 = parseFloat(userValue1);
                userValue2 = parseFloat(userValue2);
                localResult = operate(operatorUser, userValue1, userValue2);
                console.log( 'userValue1-->' + userValue1 + 'userValue2-->' + userValue2 + 'operatorUser' + operatorUser + 'localResult-->' + localResult);
                displayExpression = localResult;
                displayEle.textContent += localResult.toFixed(8) + e.target.textContent;
                displayExpression = displayEle.textContent;
            }
           
        }
        
    });
}
