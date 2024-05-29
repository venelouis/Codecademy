/* Return
When a function is called, 
the computer will run through the function’s code and evaluate the result.
By default, the resulting value is undefined. */

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

/* In the code example, 
we defined our function to calculate the area of a width and height parameter.
Then rectangleArea() is invoked with the arguments 5 and 7. 
But when we went to print the results we got undefined. 
Did we write our function wrong? No! 
In fact, the function worked fine, and the computer did calculate the area as 35, 
but we didn’t capture it. So how can we do that? With the keyword return! 

To pass back information from the function call, we use a return statement. 
To create a return statement, 
we use the return keyword followed by the value that we wish to return. 
Like we saw above, if the value is omitted, undefined is returned instead.

When a return statement is used in a function body, 
the execution of the function is stopped and the code that follows it will not be executed. 
Look at the example below: */

function rectangleArea(width, height) {
  if (width < 0 || height < 0) { // This checks if the width or height are negative
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
/* If an argument for width or height is less than 0, 
then rectangleArea() will return 'You need positive integers to calculate area!'. 
The second return statement width * height will not run.

The return keyword is powerful because it allows functions to produce an output. 
We can then save the output to a variable for later use. */
function monitorCount(rows,columns){
    return(rows*columns)
};
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);
/*Helper Functions
We can also use the return value of a function inside another function. 
These functions being called within another function are often referred to as helper functions. 
Since each function is carrying out a specific task, 
it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, 
we could write two functions like: */

function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

/*In the example above:

- getFahrenheit() is called and 15 is passed as an argument.
- The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
- multiplyByNineFifths() takes the argument of 15 for the number parameter.
- The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), 
which evaluates to 27.
- 27 is returned back to the function call in getFahrenheit().
- getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
- Finally, 59 is returned back to the function call getFahrenheit(15).

We can use functions to section off small bits of logic or tasks, then use them when we need to. 
Writing helper functions can help take large and difficult tasks 
and break them into smaller and more manageable tasks.