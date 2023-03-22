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



// 3 task 

const myRecipe = {
} 

myRecipe.mealName = 'Omelette';
myRecipe.serves = 2;
myRecipe.ingredients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper'];

let item = Object.keys(myRecipe).length;
console.log (item);

while (item < 4) {
  console.log ('Meal name: ' + myRecipe.mealName);
  console.log ('Serves: ' + myRecipe.serves)
  console.log ('Ingredients: ' + myRecipe.ingredients.join (', '))
  item++;
}

// 4 task

/**
 * Keep track of which books you read and which books you want to read!
 *  
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */

const myBooks = [
  {
    author: 'Author 1',
    title: 'Book 1',
    read: true 
  },
  {
    author: 'Author 2',
    title: 'Book 2',
    read: true 
  },
  {
    author: 'Author 3',
    title: 'Book 3',
    read: false 
  }
]

for (i = 0; i < myBooks.length; i++){
  if 
    (myBooks[i].read === false){
    console.log ('You still need to read ' + myBooks[i].title )
  } else {
    console.log ('You already read ' + myBooks[i].title)
  }
}


// 5 task

/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 * 
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:

const drinkTypes = ['cola', 'lemonade', 'water'];

const drinkTray = [];

function randomDrink () {
  a = Math.floor(Math.random()*3);
  return drinkTypes[a];
}

const drink = randomDrink();
const clone = Object.assign([], drinkTypes);

  for (i = 0; drinkTray.length < 2 ; i++){
    drinkTray.push(randomDrink()); 
  if (drinkTray[0] !== drink) {
    drinkTray.push(drink)
  } else if (drinkTray[0] === drink){
    drinkTypes.splice(drinkTypes.indexOf(drink), 1)
    drinkTray.push(drinkTypes[Math.floor(Math.random()*drinkTypes.length)])
  }for (i = 0; i < clone.length; i++){
    drinkTray.push(clone[i])
  }
  }

  function shuffle() {
    return Math.random () - 0.5;
  }

console.log(`Hey guys, I brought a ${drinkTray.sort(shuffle).join(', ')}!`)


