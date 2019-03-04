let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

// Numeric conversion, unary +
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// Exponentiation
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// Increment / decrement
let counter = 2;
counter++;      // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

counter = 2;
counter--;      // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

counter = 1;
let a = ++counter; // (*)
alert(a); // 2

// Comma
let comma = (1 + 2, 3 + 4);
alert( comma ); // 7 (the result of 3 + 4)