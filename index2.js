import { add, sub, multiply, divide } from './Index.js';
import program from './Index.js';

let addition = add(45,23);
let subtraction = sub(45,20);
let multiplication =multiply(20,10);
let division = divide (45,5);

console.log ("Addition:"+addition);
console.log("Subtraction :"+subtraction);
console.log("Multiplication :"+multiplication);
console.log("Division : "+division);

let greeting = program("welcome to Javascript Programmming");
console.log(greeting);