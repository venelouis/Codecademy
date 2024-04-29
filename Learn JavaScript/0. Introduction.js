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

/*Data Types
Data types are the classifications we give to the different kinds of data that we use in programming. 
In JavaScript, there are eight fundamental data types:

- Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.

- BigInt: Any number, greater than 253-1 or less than -(253-1), 
with n appended to the number: 1234567890123456n.

- String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) 
surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. 
Some people like to think of string as a fancy word for text.

- Boolean: This data type only has two possible values— either true or false (without quotes). 
It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.

- Null: This data type represents the intentional absence of a value, 
and is represented by the keyword null (without quotes).

- Undefined: This data type is denoted by the keyword undefined (without quotes). 
It also represents the absence of a value though it has a different use than null. 
undefined means that a given value does not exist.

- Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

- Object: Collections of related data.

The first 7 of those types are considered primitive data types. 
They are the most basic data types in the language. Objects are more complex, 
and you’ll learn much more about them as you progress through JavaScript. 
At first, eight types may not seem like that many, 
but soon you’ll observe the world opens with possibilities once you start leveraging each one. 
As you learn more about objects, you’ll be able to create complex collections of data.

But before we do that, let’s get comfortable with strings and numbers! */
console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
console.log(40);
/* In the example above, we first printed a string. 
Our string isn’t just a single word; 
it includes both capital and lowercase letters, spaces, and punctuation.
Next, we printed the number 40, notice we did not use quotes. */