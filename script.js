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

 //updates screen
 function updateScreen(){
   if (result !== '' && operator !== '' ){
      screen.textContent = result.toString();
   } else if (operator === ''){
      screen.textContent = firstNumber;
   }else {
      screen.textContent = secondNumber;
   }

 }
//places numeric calculator data in the appropiate variable
 function numericalData(numericalElement){
   if ((operator === '')){
      firstNumber += numericalElement.textContent;
      
   } else{
      secondNumber += numericalElement.textContent;       
      
   }
 }

 // places operator data in the appropiate variable
 function operatorData(operatorElement){ 
      operator = operatorElement.id;
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
      numericalData(number);
      updateScreen();
   }));

 operators.forEach((operatorElement) =>
   operatorElement.addEventListener('click', ()=>{
      operatorData(operatorElement);
      secondOperation();
      updateScreen();
   })
);

equals.addEventListener('click', ()=>{
   operate(parseInt(firstNumber), parseInt(secondNumber),operator);
   updateScreen();
});


clear.addEventListener('click', reset);

