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
   switch (operator){
      case 'division':
         result = division(storedValue, currentValue);
         updateValues()
         break;
      
      case 'multiplication':
         result = multiply(storedValue, currentValue);
         updateValues()
         break;

      case 'subtraction':
         result = subtract(storedValue, currentValue);
         updateValues()
         break;

      case 'addition':
         result = add(storedValue, currentValue);
         updateValues()
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
      operator = operatorElement.id;
      storedValue = currentValue;
      currentValue = ''
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



 

 // DOM manipulation
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let screen = document.getElementById('results');
let equals = document.querySelector('#equal')
let clear = document.getElementById('ac');

numbers.forEach((number) =>
   number.addEventListener('click', () => {
      screenValue(number);
      screenText();
   }));

operators.forEach((operatorElement) =>
   operatorElement.addEventListener('click', ()=>{  
      if (storedValue !== '' && operator !== '' && currentValue !== ''){
         operate(parseInt(storedValue), parseInt(currentValue), operator);
         screenText();
         operatorData(operatorElement);
      }else {
         operatorData(operatorElement); 
      }    
   
   })
);

equals.addEventListener('click', ()=>{
   operate(parseInt(storedValue), parseInt(currentValue),operator);
   screenText();
});


clear.addEventListener('click', reset);

