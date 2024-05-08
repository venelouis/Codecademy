/*Truthy and Falsy
Let’s consider how non-boolean data types, like strings or numbers, 
are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists 
and you won’t necessarily want it to equal a specific value 
— you’ll only check to see if the variable has been assigned a value.

Here’s an example: */

let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

/* The code block in the if statement will run because myVariable has a truthy value; 
even though the value of myVariable is not explicitly the value true, 
when used in a boolean or conditional context, 
it evaluates to true because it has been assigned a non-falsy value.

So which values are falsy— or evaluate to false when checked as a condition? 
The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number

Here’s an example with numbers: */

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'

// The condition evaluates to false because the value of the numberOfApples is 0. 
// Since 0 is a falsy value, the code block in the else statement will run.
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/*Truthy and Falsy Assignment
Truthy and falsy evaluations open a world of short-hand possibilities!

Say you have a website and want to take a user’s username to make a personalized greeting. 
Sometimes, the user does not have an account, making the username variable falsy. 
The code below checks if username is defined and assigns a default string if it is not: */

let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

/*If you combine your knowledge of logical operators you can use a short-hand for the code above. 
In a boolean condition, JavaScript assigns the truthy value to a variable 
if you use the || operator in your assignment: */

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger

/* Because || or statements check the left-hand condition first, 
the variable defaultName will be assigned the actual value of username if it is truthy, 
and it will be assigned the value of 'Stranger' if username is falsy. 
This concept is also referred to as short-circuit evaluation.

Instructions:
1. Let’s use short-circuit evaluation to assign a value to writingUtensil. 
Do not edit tool yet, we’ll return to tool in the next step.

Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'. */
// If tool is falsy, assign a default value of 'pen'
let tool = '';
// If tool is falsy, assign a default value of 'pen'
tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);