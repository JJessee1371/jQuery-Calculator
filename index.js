console.log('Sanity check');

//Grab items and make variables
let num1Dis = $('#number1');
let num2Dis = $('#number2');
let operatorDis = $('#operator');
let resultDis = $('#result');
let firstNum = '';
let operator = '';
let secondNum = '';
let result = '';

//Initialzie the calculator 
function initialize() {
    firstNum = '';
    operator = '';
    secondNum = '';
    result = '';
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
    let operatorChosen = true;
    console.log(operatorChosen);
});





//Switch statement of functions to be performed on inputs
switch(operator) {
    case 'plus': 
        resultDis.text(parseInt(firstNum) + parseInt(secondNum));

    case'minus': 
        resultDis.text(parseInt(firstNum) - parseInt(secondNum));

    case 'multiply': 
        resultDis.text(parseInt(firstNum) * parseInt(secondNum));

    case 'divide':
        resultDis.text(parseInt(firstNum) / parseInt(secondNum));
    case 'power':
        resultDis.text(Math.pow(parseInt(firstNum), parseInt(secondNum)));
}

//Clear button click listener
$('#clear').on('click', initialize);