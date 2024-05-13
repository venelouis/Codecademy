/* Else If Statements:
We can add more conditions to our if...else with an else if statement. 
The else if statement allows for more than two possible outcomes. 
You can add as many else if statements as you’d like, to make more complex conditionals!

The else if statement always comes after the if statement and before the else statement. 
The else if statement also takes a condition. Let’s take a look at the syntax: */

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
/* The else if statements allow you to have multiple possible outcomes. 
if/else if/else statements are read from top to bottom, 
so the first condition that evaluates to true from the top to bottom is the block that gets executed.

In the example above, since stopLight === 'red' evaluates to false 
and stopLight === 'yellow' evaluates to true, 
the code inside the first else if statement is executed. 
The rest of the conditions are not evaluated. If none of the conditions evaluated to true, 
then the code in the else statement would have executed. */

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {'It\'s fall! Leaves are falling!'
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
} 
/* The switch keyword:
else if statements are a great tool if we need to check multiple conditions. 
In programming, 
we often find ourselves needing to check multiple values and handling each of them differently. 
For example: */

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

/* In the code above, 
we have a series of conditions checking for a value that matches a groceryItem variable. 
Our code works fine, but imagine if we needed to check 100 different values! 
Having to write that many else if statements sounds like a pain!

A switch statement provides an alternative syntax that is easier to read and write. 
A switch statement looks like this: */

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'

/* The switch keyword initiates the statement and is followed by ( ... ), 
which contains the value that each case will compare. In the example, 
the value or expression of the switch statement is groceryItem.
Inside the block, { ... }, there are multiple cases. 
The case keyword checks if the expression matches the specified value that comes after it. 
The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', 
that case‘s console.log() would run.

The value of groceryItem is 'papaya', 
so the third case runs— Papayas are $1.29 is logged to the console.
The break keyword tells the computer to exit the block 
and not execute any more code or check any other cases inside the code block. 
Note: Without break keywords, the first matching case will run, 
but so will every subsequent case regardless of whether or not it matches—including the default. 
This behavior is different from if/else conditional statements that execute only one block of code.
At the end of each switch statement, there is a default statement. 
If none of the cases are true, then the code in the default statement will run. */

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
  console.log('No medal awarded.');
  break;
}
