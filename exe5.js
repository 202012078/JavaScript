// type conversion and type coerction
console.log("Type Converstion and Type Coerction");

// Type Conversion
let myVar;
myVar = 34;
console.log(myVar, typeof myVar);
console.log(String(myVar), typeof String(myVar));

let boolVar = String(true);
console.log(boolVar, typeof boolVar);

let date = new Date();
console.log(date, typeof date);

let dateString = String(new Date());
console.log(dateString, typeof dateString);

// Array
let arr = [1,2,3,4,5];
console.log(arr, typeof arr);
console.log(String(arr), typeof String(arr));
console.log(arr.length, typeof String(arr));
// String 
let arrSting = String([1,2,3,4,5]);
console.log(arrSting.length, typeof arrSting);

let i = 3;
console.log(i, i.toString());

let stri = Number("003");
console.log(stri, typeof stri);
stri = Number("005d");
console.log(stri, typeof stri);
stri = Number(false);
console.log(stri, typeof stri);

let number = parseInt('03');
console.log(number, typeof number);
number = parseFloat('1.010101');
console.log(number, typeof number);

// toFixed is use as a point after value manage
console.log(number.toFixed(3), typeof number);


// Type coercion
let myStr = '698';
let myNum = 34;
console.log(myStr + myNum);
myStr = Number(myStr)
console.log(myStr + myNum);
