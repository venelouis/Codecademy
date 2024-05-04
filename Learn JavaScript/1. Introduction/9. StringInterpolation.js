/* String Interpolation
In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

Notice that:
- a template literal is wrapped by backticks ` 
(this key is usually located on the top of your keyboard, left of the 1 key).
- Inside the template literal, you’ll see a placeholder, ${myPet}. 
The value of myPet is inserted into the template literal.
- When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 
'I own a pet armadillo.'

One of the biggest benefits to using template literals is the readability of the code. 
Using template literals, you can more easily tell what the new string will be. 
You also don’t have to worry about escaping double quotes or single quotes. */
const myName = 'Venelouis';
let myCity = 'Floripa';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

/* typeof operator
While writing code, it can be useful to keep track of the data types of the variables in your program. 
If you need to check the data type of a variable’s value, you can use the typeof operator.

The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

Let’s break down the first example. Since the value unknown1 is 'foo', a string, 
typeof unknown1 will return 'string'. */
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

/* Review Variables
Nice work! This lesson introduced you to variables, 
a powerful concept you will use in all your future programming endeavors.

Let’s review what we learned:
- Variables hold reusable data in a program and associate it with a name.
- Variables are stored in memory.
- The var keyword is used in pre-ES6 versions of JS.
- let is the preferred way to declare a variable when it can be reassigned, 
and const is the preferred way to declare a variable with a constant value.
- Variables that have not been initialized store the primitive data type undefined.
- Mathematical assignment operators make it easy to calculate a new value and 
assign it to the same variable.
- The + operator is used to concatenate strings including string values held in variables.
- In ES6, template literals use backticks ` and ${} to interpolate values into a string.
- The typeof keyword returns the data type (as a string) of a value. */
