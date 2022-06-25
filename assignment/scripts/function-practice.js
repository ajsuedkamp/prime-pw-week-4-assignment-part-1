console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name;
}
console.log(helloName('alex'));










// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let sum = firstNumber + secondNumber;
  return sum;
}
console.log(addNumbers(5, 7));
console.log(addNumbers(5.5, 19.25));


// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c){
  let product = a * b * c;
  return product;
}
console.log(multiplyThree(2, 2, 2));
console.log(multiplyThree(17, 21, 89));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let exampleArray = [];
let exapmpleArray1 = [5, 10, 15, 20];
function getLast(array) {
  let lastItem = array[array.length - 1];
  if (lastItem >= 0) {
    return lastItem;
  } else {
    return 'undefined';
  }
}
console.log(getLast(exampleArray));
console.log(getLast(exapmpleArray1));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let array7 = ['Vikings', 'Packers', 'Bears', 'Lions'];
function find( value, array ) {
  for (let i = 0; i < array.length; i++) {
  if ( value === array[i]) {
    return true;
  
  }
 }
return false;
}
console.log(find('monkeys', array7));
console.log(find('Lions', array7));
console.log(find('Vikings', array7));
console.log(find('tigers', array7));
console.log(find('Packers', array7));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true;
  } else {
      return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log(isFirstLetter('b', 'baby'));
console.log(isFirstLetter('c', 'dog'));


// 9. Function to return the sum of all numbers in an array

let someNumbers = [1, 3, 5, 7];
let someOtherNumbers = [2, 4, 6, 8];
function sumAll(arrayOfNumbers) {
  let sum = 0
  // TODO: loop to add items
  for(let i = 0; i < arrayOfNumbers.length; i++ ) {
    sum += arrayOfNumbers[i];
  }

  return sum;
}
console.log(sumAll(someNumbers));
console.log(sumAll(someOtherNumbers));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let exampleNumbers1 = [2, -3, 4, -5];
let exampleNumbers2 = [-7, -9];
let exampleNumbers3 = [12, 14, 16, 18, -20];
let exampleNumbers4 = [0];

function positiveNumbers(someArray) {
  let allPositive = [];

  for(let i = 0; i < someArray.length; i++) {
  let number = someArray[i];
  if (number > 0) {
    allPositive.push(number);
    } 
  }
  
  return allPositive;
}
console.log('Input array:', exampleNumbers2);
console.log('Positive number Output array:', positiveNumbers(exampleNumbers2));
console.log('Input array:', exampleNumbers1)
console.log('Positive number Output array:', positiveNumbers(exampleNumbers1));
console.log('Input array:', exampleNumbers3);
console.log('Positive number Output array:',positiveNumbers(exampleNumbers3));





// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// You are counting points for a basketball game, give the amount of 2-pointers
// and 3-pointers scored, find the final points for the team and return the value.
