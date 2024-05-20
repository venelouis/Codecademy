/*Parameters and Arguments
So far, the functions we’ve created execute a task without an input. 
However, some functions can take inputs and use the inputs to perform a task. 
When declaring a function, we can specify its parameters. 
Parameters allow functions to accept input(s) and perform a task using the input(s). 
We use parameters as placeholders for information that will be passed to the function when it is called.

In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, 
width and height. The parameters are specified between the parenthesis as width and height, 
and inside the function body, they act just like regular variables. 
width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses 
that follow the function name. The values that are passed to the function 
when it is called are called arguments. 
Arguments can be passed to the function as values or variables.

The variables rectWidth and rectHeight are initialized with the values for the height and width 
of a rectangle before being used in the function call.

By using parameters, calculateArea() can be reused to compute the area of any rectangle! 
Functions are a powerful tool in computer programming so let’s practice creating 
and calling functions with parameters. */
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name+'! We appreciate your business.');
}
sayThanks('Cole');

/* Default Parameters
One of the features added in ES6 is the ability to use default parameters. 
Default parameters allow parameters to have a predetermined value 
in case there is no argument passed into the function or if the argument is undefined when called.

Take a look at the code snippet below that uses a default parameter: */

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
/* In the example above, we used the = operator to assign the parameter name a default value of 
'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!

When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', 
will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, 
and 'Hello, stranger!' is logged to the console.

By using a default parameter, 
we account for situations when an argument isn’t passed into a function that is expecting an argument.
Let’s practice creating functions that use default parameters. */
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList();  