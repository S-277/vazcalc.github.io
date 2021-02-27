let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');

function onButtonPlusClick() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 + number2;

    window.alert(summ);
}

function onButtonMinusClick() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 - number2

    window.alert(summ)
}

function onButtonMultiplyClick() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 * number2;

    window.alert(summ);
}

function onButtonDevideClick() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 / number2;

    window.alert(summ);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

