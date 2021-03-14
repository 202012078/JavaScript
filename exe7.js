// Arrays and Objects

let str1 = 'Arrays';
let str2 = 'Objects';
let heading = `<h2 style="color:blue; text-align:center;"> 
                Disscuss about <u>${str1}</u> 
                and <u>${str2}</u></h2>`;
document.body.innerHTML = heading;

console.log('Arrays and Oblects');

let marks = [34, 24, 25, 78, 89, 99];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 99, [45, 54]];

const arr = new Array(45, 31, 'Orange');
console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);

console.log(arr.length);
// check the array ------------------
console.log(Array.isArray(arr));
console.log(Array.isArray('456'));

arr[0] = 'Mihir';
console.log(arr);
let arrelement = arr[0];
console.log('Element : '+arrelement);

let value = marks.indexOf(78);
console.log(value);

// Mutating or Modifying---------------------
marks.push(65);
marks.unshift(22);
marks.pop();
marks.shift();
marks.splice(1, 2); // first element is start position and second element is how to delete value.
marks.reverse();
let marks2 = [1,2,3,4,5];
marks = marks.concat(marks2);
console.log(marks);

//Object
    // key value store in our project than use in Object.

let myObj = {
    name: 'Mihir',
    channel: 'CodeWithMihir',
    isActive: true,
    marks: [78, 79, 80]
}
console.log(myObj);
console.log(myObj.name);
console.log(myObj.channel);
console.log(myObj.isActive);
console.log(myObj.marks);

let myObj1 = {
    'name': 'Mihir',
    'channel': 'GameWithMihir',
    'isActive': true,
}
console.log(myObj1['name']);
console.log(myObj1['channel']);
console.log(myObj1['isActive']);
