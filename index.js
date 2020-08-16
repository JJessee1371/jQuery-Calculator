console.log('Sanity check');

//Grab items and make variables
let num1Dis = $('#number1');
let num2Dis = $('#number2');
let operatorDis = $('#operator');
let resultDis = $('#result');
let firstNum = 0;
let operator = '';
let secondNum = 0;
let result = 0;

//Initialzie the calculator 
function initialize() {
    firstNum = 0;
    operator = '';
    secondNum = 0;
    result = 0;
    disArr = [num1Dis, num2Dis, operatorDis, resultDis];
    for (i = 0; i < disArr.length; i++) {
        disArr[i].empty();
    };
};

//When a number is clicked print to the screen as number 1
$('.num').on('click', function() {
    firstNum += $(event.currentTarget).val();
    console.log(firstNum);
    num1Dis.text(firstNum);
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