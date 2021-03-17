console.log(`Welcome to tutorial 24`);

let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('8-3-2000 05:20:05');
otherDate = new Date('March 03 2000');
otherDate = new Date('05/24/2000');
console.log(otherDate);

let day = otherDate.getDay();
let month = otherDate.getMonth();
let year = otherDate.getFullYear();
let date = otherDate.getDate();
let hour = otherDate.getHours();
let minute = otherDate.getMinutes();
let second = otherDate.getSeconds();
let time = otherDate.getTime();
let millisec = otherDate.getMilliseconds();
console.log(day);
console.log(month);
console.log(year);
console.log(date);
console.log(hour);
console.log(minute);
console.log(second);
console.log(time); // timestamp
console.log(millisec);

otherDate.setDate(24);
otherDate.setMonth(2); // 0 1 2 3 4 5 6 7 8 9 10 11

console.log(otherDate);
