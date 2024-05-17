/* FUNCTIONS
What are Functions?
When first learning how to calculate the area of a rectangle, 
there’s a sequence of steps to calculate the correct answer:

1. Measure the width of the rectangle.
2. Measure the height of the rectangle.
3. Multiply the width and height of the rectangle.With practice, 
you can calculate the area of the rectangle without being instructed with these three steps every time.

We can calculate the area of one rectangle with the following code: */
const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60

// Imagine being asked to calculate the area of three different rectangles:
// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;

/* In programming, we often use code to perform a specific task multiple times. 
Instead of rewriting the same code, we can group a block of code together 
and associate it with one task, then we can reuse that block of code whenever we need 
to perform the task again. We achieve this by creating a function. 
A function is a reusable block of code that groups together a sequence of statements 
to perform a specific task.

In this lesson, you will learn how to create and use functions, 
and how they can be used to create clearer and more concise code.

Function Declarations
In JavaScript, there are many ways to create a function. 
One way to create a function is by using a function declaration. 
Just like how a variable declaration binds a value to a variable name, 
a function declaration binds a function to a name, or an identifier. 

Diagram showing the syntax of a function declaration
A function declaration consists of:

- The function keyword.
- The name of the function, or its identifier, followed by parentheses.
- A function body, or the block of statements required to perform a specific task, 
enclosed in the function’s curly brackets, { }.

A function declaration is a function that is bound to an identifier, or name. 
In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript 
which allows access to function declarations before they’re defined.

Take a look at example of hoisting: */

greetWorld(); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}

/*
Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! 
Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.

If you want to read more about hoisting, check out MDN documentation on hoisting. */
function getReminder(){
    console.log('Water the plants.')
}

function greetInSpanish(){
    console.log('Buenas tardes.')
}
getReminder(); greetInSpanish();