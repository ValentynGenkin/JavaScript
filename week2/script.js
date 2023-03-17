//  1 task

/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 * 
 * The end result should be: 
 *   hello this is a difficult to read sentence
 */

let myString = 'hello,this,is,a,difficult,to,read,sentence';

myString = myString.replace (/,/g, ' '); //      //g - global replace , "" only first

console.log (myString);



/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(myString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');

// 2 task

/**
 * Report whether or not a number is odd/even!
 *
 *  Create a for loop, that iterates from 0 to 20.
 *  Create a conditional statement that checks if the value of the counter variable is odd or even.
 *  If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
 *  If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
 */

for (let i = 0; i < 21; i++) {
  if (i % 2 === 0){
    console.log ('The number ' + [i] + ' is odd!')
  } else if (i % 2 === 1){
    console.log ('The number ' + [i] + ' is even!')
  } else {
    console.log ('False')
  }
}
