// DOM --> Document Object Model

console.log('Welcome to tutorial 14');

/*
    element selectors:
    1. Single element selector
    2. Multi element selector
*/

// Single element selector
let element = document.getElementById('myFirst');
element = element.className;
element = element.childNodes;
element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Mihir is good boy.';
element.innerHTML = '<b>Mihir is good boy.</b>';
console.log(element);

let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('b');
console.log(sel);

// Multi element selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));
elems = document.getElementsByTagName('div');
console.log(elems);

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'Orange';
}

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'Orange';
});
