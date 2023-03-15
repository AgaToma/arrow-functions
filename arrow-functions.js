/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}

let sum = addTwoNumbers(3, 5);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b) is also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);

// Implicit Returns
//one param can be declared without parenthesis
const saySomething = message => console.log(message);
saySomething("Hello there");

//if no params we need to declare empty parenthesis
const sayHello = () => console.log("hello");


// Returning Multiple Lines
   //whatever comes after arrow needs to be wrapped in parenthesis
   const returnMultipleLines = () => (
    `<p>
        This is a returnMultipleLines.
    </p>`
   )