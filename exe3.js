console.log('Variable');
console.log('--------------------');

//var --> Global scope

var name = 'Mihir';
var channel;
var marks = 10;
channel = 'Code with mihir'
console.log(name, channel, marks)

// Rules
/*
1) Cnanot start with Number
2) Can start with letter, number, _ or $
3) Are case sensitive
*/

var city = 'Khageshri';

const godname = 'Jay shree Radhe Krishna';
console.log(city, godname)

//let --> function scope

{
    let city = 'Khageshri';
    city = 'Porbandar';
    console.log(city);
}
console.log(city);

const arr1=[1,2,3,4,5,6,7,8,9];
arr1.push(10);
console.log(arr1);
