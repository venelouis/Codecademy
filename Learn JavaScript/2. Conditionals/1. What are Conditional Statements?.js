/* What are Conditional Statements?
In life, we make decisions based on circumstances. 
Think of an everyday decision as mundane as falling asleep — if we are tired, 
we go to bed, otherwise, we wake up and start our day.

These if-else decisions can be modeled in code by creating conditional statements. 
A conditional statement checks a specific condition(s) and performs a task based on the condition(s).

In this lesson, we will explore how programs make decisions by evaluating conditions 
and introduce logic into our code!

We’ll be covering the following concepts:

- if, else if, and else statements
- comparison operators
- logical operators
- truthy vs falsy values
- ternary operators
- switch statement 

If Statement
We often perform a task based on a condition. 
For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.

In programming, we can also perform a task based on a condition using an if statement: */
if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!

/* Notice in the example above, we have an if statement. The if statement is composed of:
- The if keyword followed by a set of parentheses () which is followed by a code block, 
or block statement, indicated by a set of curly braces {}.
- Inside the parentheses (), a condition is provided that evaluates to true or false.
- If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
- If the condition evaluates to false, the block won’t execute.

Let’s make an if statement. */
let sale = true;
if (sale) {
  console.log('Time to buy!')
}
// Prints: Time to buy!

/* If...Else Statements
In the previous exercise, 
we used an if statement that checked a condition to decide whether or not to run a block of code. 
In many cases, we’ll have code we want to run if our condition evaluates to false.

If we wanted to add some default behavior to the if statement, 
we can add an else statement to run a block of code when the condition evaluates to false. 
Take a look at the inclusion of an else statement: */

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}

// Prints: But the code in this block will!
/*

An else statement must be paired with an if statement, 
and together they are referred to as an if...else statement.

In the example above, the else statement:
- Uses the else keyword following the code block of an if statement.
- Has a code block that is wrapped by a set of curly braces {}.
- The code inside the else statement code block will execute when: 
the if statement’s condition evaluates to false.

if...else statements allow us to automate solutions to yes-or-no questions, 
also known as binary decisions.

