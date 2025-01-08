let userInput = '';
let userOperator = '';
let num1 = 0;

const orderDisplay = document.getElementById('Display');

/********************** addition function  *********************/
function addToNum(num) {
userInput += num;
orderDisplay.innerHTML = userInput;

}

function operator(op) {
    userOperator = op;
    num1 = parseInt(userInput);  // converts string into number //
    userInput = '';
}

function add(num1, num2) {
return num1 + num2;
}

/********************** subtraction function  *********************/
function subtract(num1, num2) {
    return num1 - num2;
}

/********************** multiplication function  *********************/
function multiply(num1, num2) {
    return num1 * num2;
}

/********************** division function  *********************/
function divide(num1, num2) {
    return num1 / num2;
}

/********************** clear function  *********************/
function clr(num1, num2) {
orderDisplay.innerHTML = '0';
userInput ='';
}

/********************** calculate function  *********************/
function calculate() {
     let num2 = parseInt(userInput);

    //  The way we look can calculate the 2 numbers for the answer , depending on the operator that was put in //
     switch(userOperator) {
        case '+':
            orderDisplay.innerHTML = add(num1, num2);
            break;
            case '-':
            orderDisplay.innerHTML = subtract(num1, num2);
            break;
            case '*':
            orderDisplay.innerHTML = multiply(num1, num2);
            break;
            case '/':
            orderDisplay.innerHTML = divide(num1, num2);
            break;
     }
}
