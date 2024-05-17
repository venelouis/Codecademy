//1. What will the code block log to the console?

let weather = "spring";
let clothingChoice = "";

if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);

// Put on rain boots.

//2. What will the code block log to the console?
let needTacos = true;

if (needTacos) {
    console.log("Finding tacos");
} else {
    console.log("Keep on keeping on!");
}
// Finding tacos

/*3. To make this statement valid, what operator belongs in the ___ space below?
if (coin ___ "heads") {
  console.log('coin is heads!');
} else {
  console.log('coin is tails...');
}
Answer: === */

//5. What will the code block log to the console?
let groceryItem = "apple";

switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}
// Invalid item

//6. Translate this to JavaScript:
/*Log “Bear!” to console if isFurry is true and weight is over 100 pounds.
if (isFurry && weight > 100) {
    console.log("Bear!");
} */

// 7> How would you properly refactor this code block using the ternary operator?
/* CODE:

if (walkSignal === 'Walk') {
    console.log('You may walk!'); 
} else {   
    console.log('Do not walk!');
}

// Answer:
walkSignal === 'Walk' ? console.log('You may walk!') : console.log('Do not walk!');

*/

//10. What will the code block log to the console?
let runTime = 35;
let runDistance = 3.5;

if (runTime <= 30 && runDistance > 3.5) {
  console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
  console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
  console.log("Nice workout!"); 
} else {
  console.log("Keep on running!");
}