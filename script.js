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

 //operate function
 function operate(firstNumber, secondNumber, operator){
   switch (operator){
      case 'division':
         return division(firstNumber, secondNumber);
      
      case 'multiplication':
         return multiply(firstNumber, secondNumber);

      case 'subtraction':
         return subtract(firstNumber, secondNumber);

      case 'addition':
         return add(firstNumber, secondNumber);      
   }
 }
//places numeric calculator data in the appropiate variable
 function numericalData(){
   if ((operator === '')){
      firstNumber += this.textContent;
      screen.textContent = firstNumber;
   } else{
      secondNumber += this.textContent; 
   }
 }

 // DOM manipulation
 let numbers = document.querySelectorAll('.number')
 let screen = document.getElementById('results');

 numbers.forEach((number) =>
   number.addEventListener('click', numericalData));
