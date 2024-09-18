// basic math functions.
function add(x, y){
    return x + y;
 }

function subtract(x,y){
    return x-y;
 }

function multiply(x, y){
    return x * y;
 }

function division(x, y){
    if (y == 0) return "Are you trying to end the world!!!!";
    return x / y;
 }

 //operation variables
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let currentValue ='';

 //operate function
function operate(firstNumber, secondNumber, operator){
   switch (operator){
      case 'division':
         result = division(firstNumber, secondNumber);
         firstNumber = result;
         secondNumber = '';
         break;
      
      case 'multiplication':
         result = multiply(firstNumber, secondNumber);
         firstNumber = result;
         secondNumber = '';
         break;

      case 'subtraction':
         result = subtract(firstNumber, secondNumber);
         firstNumber = result;
         secondNumber = '';
         break;

      case 'addition':
         result = add(firstNumber, secondNumber);
         firstNumber = result;
         secondNumber = '';
         break;      
   }
 }
// assigns number value to current value
function screenValue(numberElement){ 
   currentValue += numberElement.textContent;   
}

// upoates calculator screen
function screenText(){
   screen.textContent = currentValue;
 }


//places numeric calculator data in the appropiate variable
function numericalData(numericalElement){
   if ((operator === '')){
      firstNumber = parseInt(currentValue);

   } else{
      secondNumber = parseInt(currentValue);       
      
   }
 }

 // places operator data in the appropiate variable
function operatorData(operatorElement){ 
      operator = operatorElement.id;
      currentValue = '';
   }
// resets the screen to 0
function reset(){
      firstNumber = 0;
      screen.textContent = firstNumber;
      firstNumber = '';
   }
// performs operations without using the equals button
function secondOperation(){
      if((operator !== '') && (firstNumber !== '') && (secondNumber !== '')){
         operate(parseInt(firstNumber), parseInt(secondNumber), operator)
      }
   }



 

 // DOM manipulation
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let screen = document.getElementById('results');
let equals = document.querySelector('#equal')
let clear = document.getElementById('ac');

numbers.forEach((number) =>
   number.addEventListener('click', () => {
      screenValue(number);
      numericalData(number);
      screenText();
   }));

operators.forEach((operatorElement) =>
   operatorElement.addEventListener('click', ()=>{
      operatorData(operatorElement);
      secondOperation();      
   })
);

equals.addEventListener('click', ()=>{
   operate(parseInt(firstNumber), parseInt(secondNumber),operator);
   screenText();
});


clear.addEventListener('click', reset);

