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
 function numericalData(element){
   if ((operator === '')){
      firstNumber += element.textContent;
      screen.textContent = firstNumber;
   } else{
      secondNumber += element.textContent;       
      screen.textContent = secondNumber;
   }
 }

 // places operator data in the appropiate variable
 function operatorData(element){ 
      operator = element.id;
   }
 

 // DOM manipulation
 let numbers = document.querySelectorAll('.number');
 let operators = document.querySelectorAll('.operator');
 let screen = document.getElementById('results');
 let equals = document.querySelector('#equal')

 numbers.forEach((number) =>
   number.addEventListener('click', () => {
      numericalData(number);
   }));

 operators.forEach((operatorElement) =>
   operatorElement.addEventListener('click', ()=>{
      operatorData(operatorElement);
   })
);

