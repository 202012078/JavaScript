// String --> Properties, Methods, Template

console.log("String --> Properties, Methods, Template");

const name = 'Mihir';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html = '<h1> this is heading <h1>';
html = html.concat(' Hello');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[2]);
console.log(html.indexOf('this'));
console.log(html.indexOf('this1'));
console.log(html.indexOf('h'));
console.log(html.lastIndexOf('h'));
console.log(html.charAt(2));
console.log(html.endsWith('Hello'));
console.log(html.includes('is'));
console.log(html.substring(1,6));
console.log(html.slice(1,6));
console.log(html.slice(-5));
console.log(html.split(' '));
console.log(html.replace('h1', 'h2'));

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
              <h1> This is heading </h1>
              <p style="color:tomato;"> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;
