let str1 = 'Window Object';
let heading = `<h2 style="text-align:center; color:#ffa500">Disscuss about <u>Window</u> <u>Object</u></h2>`;

document.body.innerHTML = heading;

// Window in a global scope.
let a = window.document;
a = prompt(`Type your name`);
alert(`Hello ${a}`);
a = confirm(`Are you sure you want to delete this page?`);
a = window.innerHeight;
a = window.innerWidth;
a = location
a = history;
console.log(a);
