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