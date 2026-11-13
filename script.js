var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result');

var addButton = document.getElementById('addButton');
var subtractButton = document.getElementById('subtractButton');

addButton.addEventListener('click', () =>{
    const sum = parseFloat(num1.value) + parseFloat(num2.value);
    result.textContent = sum;
    console.log(sum);
});
subtractButton.addEventListener('click', () =>{
    const difference = parseFloat(num1.value) - parseFloat(num2.value);
    result.textContent = difference;
    console.log(difference);
});