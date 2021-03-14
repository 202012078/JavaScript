/*
    Data types in Java Script
        1. Primitive data type --> Stack
            a. String --> "Mihir"
            b. Numbers --> 03
            c. Boolean --> true/false 
            d. Null --> Intensional Empty value
            e. undefined --> var name; --> def value = undefined
            f. symbol --> ES6

        2. Reference data type --> Heap
            a. Arrays
            b. Object Literals
            c. functions
            d. Dates
*/

// Primitive data types
console.log("Primitive Data Types\n");
console.log("----------------------\n");
//String
let name = "Mihir";
console.log("My name is "+name);
console.log("Data type is "+ typeof(name));

//Numbers
let marks = 03;
console.log("\nMy marks is "+marks);
console.log("Data type is "+typeof(marks));

//Boolean
let isDriver = true;
console.log("\nThis is driver (true/false)? --> "+isDriver);
console.log("Data type is "+typeof(isDriver));

//Null
let nullVar = null;
console.log("\nData type is "+typeof(nullVar));

//Undefined
let undef = undefined;
console.log("\nData type is "+typeof(undef));

//----------------------------------------------------------------------

// Referance Data Types
console.log("\n\nReferance Data Types\n");
console.log("----------------------\n");

// Arrays
let myarr = [1, 2, 3, 4, true, "Mihir"];
console.log("Data type is "+(typeof myarr));

// Object Literals
let stMarks = {
    Mihir: 99,
    Sachin: 98,
    Yash: 97
}
console.log(stMarks);
console.log(typeof stMarks);

// Function
function findName() {
    
}
console.log(typeof findName);

// Date
let date = new Date();
console.log(typeof date);
