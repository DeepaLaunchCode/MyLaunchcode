/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Bug Implicit type conversion issue
// "5" - 2 works due to implicit conversion, but let's make it explicit
let result = Number("5") - 2;
console.log("The result is: " + result); // Expected output: 3

// Bug Boolean conversion issue
// Boolean("false") is true because non-empty strings are truthy
// Fix: Convert the string to a boolean based on actual value
let isValid = ("false".toLowerCase() === "true"); // Converts string 'false' correctly
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!"); // Expected output: This is NOT valid!
}

// Bug 3: String concatenation issue
// "25" + 5 results in "255" due to implicit string conversion
// Fix: Convert age explicitly to a number before adding
let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge); // Expected output: 30

// Part 2: Implicit and Explicit Type Conversion Examples

// Implicit Type Conversion Example
let implicitExample = "10" * 2; // "10" is implicitly converted to a number
console.log("Implicit Example (\"10\" * 2):", implicitExample); // Output: 20

// Explicit Type Conversion Example with Edge Case
let explicitExample = Number(undefined); // Converting undefined to a number results in NaN
console.log("Explicit Example (Number(undefined)):", explicitExample); // Output: NaN
