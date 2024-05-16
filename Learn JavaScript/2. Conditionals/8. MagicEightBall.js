/* Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, 
in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

Tasks: 
1. In the first line of the program, define a variable called userName that is set to an empty string.
If the user wants, they can enter their name in between the quotation marks. */
let userName = 'Venelouis';
/* 2. Below this variable, create a ternary expression that decides what to do 
if the user enters a name or not. If the user enters a name — like 'Jane' — 
use string interpolation to log Hello, Jane!.Otherwise, simply log Hello! */
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
/* 3. Create a variable named userQuestion. 
The value of the variable should be a string that is the question the user wants to ask 
the Magic Eight Ball. */
let userQuestion = 'Will I become a successful software engineer?';
/* 4. Write a console.log() for the userQuestion, stating what was asked. 
You can include the user’s name in the console.log() statement, if you wish! */
console.log(`${userName} asked: ${userQuestion}`);
/* 5. We want to generate a random number between 0 and 7.
Create another variable, and name it randomNumber. Set it equal to Math.floor(Math.random() * 8); */
let randomNumber = Math.floor(Math.random() * 8);
/* 6. Create one more variable named eightBall, and set it equal to an empty string.
We will save a value to this variable in the next steps, depending on the value of randomNumber. */
let eightBall = '';
/* 7. Depending on the value of randomNumber, which is 0, 1, 2, 3, 4, 5, 6, or 7,
set the value of eightBall to a reply that a Magic Eight Ball would return. 
Think about utilizing if/else or switch statements. 
Here are 8 ball responses:
- It is certain
- It is decidedly so
- Reply hazy try again
- Cannot predict now
- Do not count on it
- My sources say no
- Outlook not so good
- Signs point to yes 
If the randomNumber is 0, then save an answer to the eightBall variable;
if randomNumber is 1, then save the next answer, and so on. */
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}
/* 8. Write a console.log() to print the Magic Eight Ball’s answer, 
the value of the eightBall variable. */
console.log(`The Magic Eight Ball answered: ${eightBall}`);
/* 9. Run your program a few times to see random results appear in the console!

If you want extra practice:

If you started with a switch statement, convert it to if/else if/else statements.
If you started with if/else if/else statements, convert them to a switch statement. */
if (randomNumber === 0) {
    eightBall = 'It is certain';
}
else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
}
else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
}
else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
}
else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
}
else if (randomNumber === 5) {
    eightBall = 'My sources say no';
}
else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
}
else {
    eightBall = 'Signs point to yes';
}
console.log(`The Magic Eight Ball answered: ${eightBall}`);
