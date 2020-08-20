console.log('Sanity check');

//Grab items and make variables
const num1Dis = $('#number1');
const num2Dis = $('#number2');
const operatorDis = $('#operator');
const resultDis = $('#result');
let firstNum = '';
let operator = '';
let secondNum = '';
let result = '';
let operatorChosen = false;
let complete = false;

//Initialzie the calculator 
function clear() {
    firstNum = '';
    operator = '';
    secondNum = '';
    result = '';
    operatorChosen = false;
    complete = false;
    disArr = [num1Dis, num2Dis, operatorDis, resultDis];
    for (i = 0; i < disArr.length; i++) {
        disArr[i].empty();
    };
};

//When a number is clicked print to the screen as number 1
$('.num').on('click', function() {
    if (complete === true) {clear()};

    if (!operatorChosen) {
    firstNum += $(event.currentTarget).val();
    num1Dis.text(firstNum);
    }
//If the user has chosen an operator number 2 will be printed
    else if (operatorChosen) {
    secondNum += $(event.currentTarget).val();
    num2Dis.text(secondNum);
    }
});
//When an operator is clicked it's displayed 
$('.operator').on('click', function() {
    if (!firstNum || complete) {return};
    operatorChosen = true;
    operator += $(event.currentTarget).val();
    operatorDis.text(operator);
});



//Switch statement of functions to be performed on inputs
$('#equal').on('click', calculate);

function calculate() {
    if (!firstNum || !secondNum || !operator) {return};

    switch(operator) {
        case '+': 
            result = add(parseInt(firstNum), parseInt(secondNum));
            break;

        case '-': 
            result = subtract(parseInt(firstNum), parseInt(secondNum));
            break;

        case '*': 
            result = multiply(parseInt(firstNum), parseInt(secondNum));
            break;

        case '/':
            result = divide(parseInt(firstNum), parseInt(secondNum));
            break;

        case '^':
            result = power(parseInt(firstNum), parseInt(secondNum));
            break;
    };

    resultDis.text(result);
    console.log(result);
    complete = true;
};



//Math operations functions
function add(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
};

function power(firstNum, secondNum) {
    Math.pow(firstNum, secondNum);
};

//Clear button click listener
$('#clear').on('click', clear);