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

//Initialzie the calculator 
function initialize() {
    firstNum = '';
    operator = '';
    secondNum = '';
    result = '';
    operatorChosen = false;
    disArr = [num1Dis, num2Dis, operatorDis, resultDis];
    for (i = 0; i < disArr.length; i++) {
        disArr[i].empty();
    };
};

//When a number is clicked print to the screen as number 1
$('.num').on('click', function() {
    if (operatorChosen === false) {
    firstNum += $(event.currentTarget).val();
    console.log(firstNum);
    num1Dis.text(firstNum);
    }
//If the user has chosen an operator number 2 will be printed
    else if (operatorChosen === true) {
    secondNum += $(event.currentTarget).val();
    console.log(secondNum);
    num2Dis.text(secondNum);
    }
});

//When an operator is clicked it's displayed 
$('.operator').on('click', function() {
    operator += $(event.currentTarget).val();
    console.log(operator);
    operatorDis.text(operator);
    operatorChosen = true;
    console.log(operatorChosen);
});



//Switch statement of functions to be performed on inputs
$('#equal').on('click', calculate());

function caluclate() {
    if (!firstNum || !secondNum || !operator) {return};

    switch(operator) {
        case '+': 
            result = add(parseInt(firstNum, parseInt(secondNum)));
            break;

        case'-': 
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
    Math.pow(fisrtNum, secondNum);
};

//Clear button click listener
$('#clear').on('click', initialize);