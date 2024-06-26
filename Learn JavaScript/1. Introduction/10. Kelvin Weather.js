/* Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

For example, 283 K converts to 10 °C which converts to 50 °F.
*/

// The forecast today is 293 Kelvin
const kelvin = 0;

// celsius is kelvin - 273 degrees
const celsius = kelvin - 273;

// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;
// When you convert from Celsius to Fahrenheit, you often get a decimal number, 
//.floor() method from the built-in Math object round down the Fahrenheit temperature. 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);