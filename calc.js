// preventDefault()
let number1 = document.getElementById('num1');
let number2=document.getElementById('num2');
function addition(){
    let sum = parseInt(number1.value) + parseInt(number2.value);
    document.getElementById('result').innerHTML = "sum is " + sum;
}
function subtraction(){
    let sum = parseInt(number1.value) - parseInt(number2.value);
    document.getElementById('result').innerHTML = "difference is " + sum;
}
function division(){
    let sum = parseInt(number1.value) / parseInt(number2.value);
    document.getElementById('result').innerHTML = "answer is" + sum;
}
function multiplication(){
    let sum = parseInt(number1.value) * parseInt(number2.value);
    document.getElementById('result').innerHTML = "answer is"+ sum;
}
function modulus(){
    let sum = parseInt(number1.value) % parseInt(number2.value);
    document.getElementById('result').innerHTML ="answer is" + sum;
}