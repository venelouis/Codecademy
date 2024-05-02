/*INTRODUCTION TO JAVASCRIPT

What is JavaScript?

Last year, millions of learners from our community started with JavaScript. Why? 
JavaScript is primarily known as the language of most modern web browsers, 
and its early quirks gave it a bit of a bad reputation. 
However, the language has continued to evolve and improve. JavaScript is a powerful, flexible, 
and fast programming language now being used for increasingly complex web development and beyond!

Since JavaScript remains at the core of web development, 
it’s often the first language learned by self-taught coders eager to learn and build. 
We’re excited for what you’ll be able to create with the JavaScript foundation you gain here. 
JavaScript powers the dynamic behavior on most websites, including this one. */

/*Console
The console is a panel that displays important messages, like errors, for developers. 
Much of the work the computer does with our code is invisible to us by default. 
If we want to see things appear on our screen, we can print, or log, to our console directly.

In JavaScript, the console keyword refers to an object, a collection of data and actions, 
that we can use in our code. Keywords are words that are built into the JavaScript language, 
so the computer recognizes them and treats them specially.

One action, or method, that is built into the console object is the .log() method. 
When we write console.log() what we put inside the parentheses will get printed, or logged, 
to the console.

It’s going to be very useful for us to print values to the console, 
so we can see the work that we’re doing.

console.log(5); 

This example logs 5 to the console. The semicolon denotes the end of the line, or statement. 
Although in JavaScript your code will usually run as intended without a semicolon, 
we recommend learning the habit of ending each statement with a semicolon 
so you never leave one out in the few instances when they are required. */

console.log(5); 

/*Comments
Programming is often highly collaborative. 
In addition, our own code can quickly become difficult to understand 
when we return to it— sometimes only an hour later! For these reasons, 
it’s often useful to leave notes in our code for other developers or ourselves.

As we write JavaScript, we can write comments in our code that the computer will ignore 
as our program runs. These comments exist just for human readers.

Comments can explain what the code is doing, leave instructions for developers using the code, 
or add any other useful annotations.

There are two types of code comments in JavaScript:

A single line comment will comment out a single line 
and is denoted with two forward slashes // preceding it. */

// Prints 5 to the console
console.log(5);

//You can also use a single line comment to comment after a line of code:

console.log(5);  // Prints 5 

// A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, 
// and */ to end the comment.

/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/

// You can also use this syntax to comment something out in the middle of a line of code:

console.log(/*IGNORED!*/ 5);  // Still just prints 5 