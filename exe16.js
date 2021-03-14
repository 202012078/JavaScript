console.log(`Welcome to tutorial 16`);

let element = document.createElement('li');

let text = document.createTextNode("Hii");
element.appendChild(text);

element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
element.innerText = 'Hello';  /* innerText is only print the text.*/
element.innerHTML = '<b>Hello</b>';  /* innerHTML is all html tag is use in string.*/

let ul = document.querySelector('ul.this');
console.log(ul);
ul.appendChild(element);

console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode(`This is a created node for elem2`);
elem2.appendChild(tnode);

element.replaceWith(elem2); 
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));

let pr = elem2.getAttribute('id');
// pr = elem2.getAttribute('class');
elem2.removeAttribute('id');
console.log(pr);
console.log(elem2, pr);

pr = elem2.hasAttribute('class');
console.log(pr);

/* 
    Quiz
    ----
        Create a heading element with text as "Go to CodewithHarry" and Create an a tag outside it with href = "https://www.codewithharry.com"
*/

let head = document.createElement('h1');
let text1 = document.createTextNode('Go to CodewithHarry');
head.append(text1);

head.className = "heading";
head.id = 'heading'; 

let h1 = document.querySelector('div.child');
h1.appendChild(head);

let tag = document.createElement('a');
let text2 = document.createTextNode('Go to CodewithHarry');
tag.append(text2);

tag.className = "tag";
tag.id = 'tag';

let tag1 = document.querySelector('h1.heading');
tag1.appendChild(tag);

tag.setAttribute('href','https://www.codewithharry.com');
console.log(tag);
