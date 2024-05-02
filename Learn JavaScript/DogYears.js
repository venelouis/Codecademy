/* Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, 
let a computer take care of it! With your knowledge of math operators and variables,
use JavaScript to convert your human age into dog years.

If you get stuck during this project or would like to see an experienced developer work through it, 
click “Get Unstuck“ to see a project walkthrough video.

Tasks:
1.Create a variable named myAge, and set it equal to your age as a number.
Write a comment that explains this line of code. */
const myAge = 34;
// a constant variable named: myAge ()wicth is 34 years).

/* 2. Create a variable named earlyYears and save the value 2 to it. 
Note, the value saved to this variable will change.
Write a comment that explains this line of code.*/
let earlyYears = 2;
// this variable will change (let)

/* 3. Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 
and reassign it to earlyYears.*/
earlyYears *= 10.5;

/* 4. Since we already accounted for the first two years, 
take the myAge variable, and subtract 2 from it. 
Set the result equal to a variable called laterYears.*/
let laterYears = myAge - 2;

/* 5. Multiply the laterYears variable by 4 
to calculate the number of dog years accounted for by your later years.
Use the multiplication assignment operator to multiply and assign in one step.
Write a comment that explains this line of code.*/
laterYears *= 4;
// this variable will change (let)

/* 6. If you’d like to check your work at this point, 
print earlyYears and laterYears to the console. Are the values what you expected?
Check off this task when you’re ready to move on. */
console.log(earlyYears);
console.log(laterYears);

/* 7. Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
Write a comment that explains this line of code.*/
const myAgeInDogYears = earlyYears + laterYears;
// a constant variable named: myAgeInDogYears ()wicth is the sum of earlyYears and laterYears).

/* 8. Let’s use a string method next.
Write your name as a string, call its method .toLowerCase(),
and store the result in a variable called myName.
The toLowerCase method returns a string with all lowercase letters.
Write a comment that explains this line of code.*/
const myName = 'VENELOUIS'.toLowerCase();
// a constant variable named: myName ()wicth is my name in lowercase).

/* 9. Write a console.log statement that displays your name and age in dog years.
Use string interpolation to display the value in the following sentence:
My name is NAME. I am HUMANAGE years old in human years 
which is DOGAGE years old in dog years. 
Replace NAME with myName, HUMANAGE with myAge, and DOGAGE with myAgeInDogYears.
Write a comment that explains this line of code. */
console.log(`My name is ${myName}. I am ${myAge} years old in human years which
is ${myAgeInDogYears} years old in dog years.`);
// a console.log statement that displays my name and age in dog years.

/*10. Great work! You can convert any human age to dog years. 
Try changing myAge and see what happens.
If you’d like extra practice, try writing this project without the *= operator. */

// I am going to change myAge to 50 years old.
const myAge = 50;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
const myAgeInDogYears = earlyYears + laterYears;
const myName = 'VENELOUIS'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// My name is venelouis. I am 50 years old in human years which is 209 years old in dog years.