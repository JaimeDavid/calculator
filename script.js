// calculator Variables
let currentValue = '';
let storedValue = '';
let operator = '';
let result = ''




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

// update value after operate function
function updateValues(){
   storedValue = result;
   currentValue = ''
}



 //operate function
function operate(storedValue, currentValue, operator){
   if (currentValue === '') currentValu = 0;
   switch (operator){
      case 'division':
         result = division(storedValue, currentValue);
         updateValues();
         break;
      
      case 'multiplication':
         result = multiply(storedValue, currentValue);
         updateValues();
         break;

      case 'subtraction':
         result = subtract(storedValue, currentValue);
         updateValues();
         break;

      case 'addition':
         result = add(storedValue, currentValue);
         updateValues();
         break;      
   }
 }



// assigns number value to current value
function screenValue(numberElement){ 
   if( currentValue === 0){
      currentValue = '';
      currentValue += numberElement.textContent; 

   }else{
      currentValue += numberElement.textContent;  
   }
 
}

// updates calculator screen
function screenText(){
   if (result !== ''){
      screen.textContent = result;
   }else {
      screen.textContent = currentValue;
   }
 }


 // places operator data in the appropiate variable and resets variables depending on the case
function operatorData(operatorElement){ 
      if (result !== ''){
         operator = operatorElement.id;
         result = '';
      }else if (currentValue === ''){
         operator = operatorElement.id;
      }else {
         operator = operatorElement.id;
         storedValue = currentValue;
         currentValue = '';

   }
}
// resets the screen to 0
function reset(){
      currentValue = 0;
      storedValue = '';
      screen.textContent = currentValue;
      currentValue = '';
      result = '';
      operator = '';
   }
//this is a tester fucntion for functionality
///////////
function tester(){
   testerCurrent.textContent = currentValue;
   testerOperator.textContent = operator;
   testerStored.textContent = storedValue;
   testerResult.textContent = result;

}


 

 // DOM manipulation
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let screen = document.getElementById('results');
let equals = document.querySelector('#equal')
let clear = document.getElementById('ac');
//////////// tester dom variables
////////////
let testerCurrent = document.querySelector('#currentTester');
let testerOperator = document.getElementById('operatorTester');
let testerStored = document.getElementById('storedTester'); 
let testerResult =  document.getElementById('resultTester');

numbers.forEach((number) =>
   number.addEventListener('click', () => {
      screenValue(number);
      screenText();
      ////////////
      tester();
   }));

operators.forEach((operatorElement) =>
   operatorElement.addEventListener('click', ()=>{  
      if (storedValue !== '' && operator !== '' && currentValue !== ''){
         operate(parseInt(storedValue), parseInt(currentValue), operator);
         screenText();
         operatorData(operatorElement);
         ///////////
         tester();
      }else {
         operatorData(operatorElement);
         ////////////// 
         tester();
      }    
   
   })
);

equals.addEventListener('click', ()=>{
   operate(parseInt(storedValue), parseInt(currentValue),operator);
   screenText();
});


clear.addEventListener('click', reset);



