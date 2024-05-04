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

/* JavaScript Versions: ES6 and Before
Ever heard of the term “ES6” and wondered what it’s about? Read this article to read and find out!

You might have seen the term “ES6” or “JavaScript ES6” and wondered what it actually means. 
Well wonder no further, because we’re going to dive into what ES6 is and how it relates to JavaScript!

First, let’s bring in some history. 
JavaScript was introduced in 1995 by the company Netscape Communications 
as a scripting language for web designers and programmers to interact with web pages. 
The next year, Netscape submitted JavaScript to a standards developing organization 
called Ecma International to create standards for a scripting language (a type of programming language). 
In 1997, Ecma International released ECMA-262 which sets standards for the first version 
of a scripting language called ECMAScript, shortened to ES.

These new ECMAScript standards provided rules for the architecture of JavaScript features. 
As new programming paradigms emerged and developers sought new features, 
newer versions of ECMAScript provided a basis for consistency between new and old JavaScript versions.

To fully distinguish the difference between JavaScript and ECMAScript: 
if you want to create an app or program you can use JavaScript — 
if you want to create a new scripting language you can follow the guidelines in ECMAScript. 
So, when you see ES6 or JavaScript ES6, 
it means that that version of JavaScript is following the specifications in the sixth edition 
of ECMAScript! You might also see ES2015 instead of ES6, 
but both terminologies are referring to the same 6th edition of ECMAScript that was released in 2015.

Now, you may be asking, 
what makes an update in 2015 still relevant today when there are more recent updates like ES7 and ES8?

Well, despite the release of newer versions, 
ES6 is actually the biggest update made to ECMAScript since the first edition released in 1997! 
Some developers even refer to ES6 as “Modern JavaScript” because of all the major additions. 
There were so many great features added to help JavaScript developers that include:

- new keywords like let and const to declare variables
- new function syntax using Arrow functions
- creation of Classes
- parameters with default values
- promises for asynchronous actions
- and many more!
U
p-to-date browsers now support most of the ES6 features which allow developers to take advantage 
of these new additions. ES6 ultimately allows programmers to save time and write more concise code. 
Take for example pre-ES6 syntax for function expressions:

var greeting = function() {
  console.log('Hello World!');  
};

With ES6 arrow functions, we can transform the expression above into:

const greeting = () => console.log('Hello World'); 

However, arrow functions are not just simply syntactical re-writes. 
As with other ES6 features, there are other underlying benefits and tradeoffs to consider. 
Nonetheless, there has been a strong adoption of ES6 in the development community. 
Benefits such as new ES6 syntax, make it easier to utilize a popular programming paradigm, 
Object Oriented Programming (OOP). With this change, 
developers in other languages who are used to OOP have a smoother transition 
into learning and using JavaScript. 
Another reason for the popularity of ES6 is correlated with the usage of ES6 
in popular frameworks like React. 
So, if you want to learn the newest tools and frameworks, you will have to pick up ES6 along the way.

This being said, we shouldn’t disregard legacy code, i.e. older versions of JavaScript. 
In fact, there are still many projects that are built and maintained with legacy code! 
If you want the ability and freedom to work on any sort of JavaScript project, 
you should familiarize yourself with pre-ES6 and ES6 JavaScript syntax. 
But don’t worry, we cover both pre-ES6 and ES6 in our JavaScript course. 
Check it out to become a rockstar at JavaScript basics and learn fundamental programming skills!