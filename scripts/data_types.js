let message = "hello";
message = 123456;

let number = 123;
number = 12.345;

// Infinity
// alert(1 / 0);
// alert(Infinity);

// NaN
// alert( "not a number" / 2);
// alert( "not a number" / 2 + 5);

//String
let str = "Hellow";
let str2 = 'single quotes are ok too';
let phrase = `can embed ${str}`;

// alert(phrase);

let name = "John";

// embed a variable
// alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
// alert( `the result is ${1 + 2}` ); // the result is 3

// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
// alert( isGreater );

// null
let age = null;

// undefined
let x;
// alert(x); // undefined
// or
let y = 123;
y = undefined;
// alert(y)

// Type conversions
// To string
let value = true;
// alert(typeof value); // boolean

value = String(value); // now value is a string "true"
// alert(typeof value); // string

// To number
// alert( "6" / "2" ); // 3 - strings are converted to numbers

let str = "123";
// alert(typeof str); // string

let num = Number(str); // becomes a number 123

// alert(typeof num); // number

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// To boolean
// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false
// alert( Boolean("0") ); // true
// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false