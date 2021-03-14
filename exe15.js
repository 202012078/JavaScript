console.log("Welcome to tutorial 15");

let cont = document.querySelector(".no");
cont = document.querySelector(".container");
console.log(cont);
console.log(cont.childNodes);  /* this is display and count all line like comment, new line */
console.log(cont.children);    /* this is dislplay and count only elements it is very useful in our project compare to chiledNodes. */

let nodeName = cont.childNodes[0].nodeName;
let nodeType = cont.childNodes[0].nodeType;
console.log(nodeName);
console.log(nodeType);

/*
  --> This is Node Type.
    1.  Element
    2.  Attribute
    3.  Text Node
    8.  Comment
    9.  Document
    10. DocType 
*/

console.log(cont.children[0].children[0].children);

console.log(cont.firstChild);  /* Display the first node of the chiledNodes. */
console.log(cont.firstElementChild);  /* Display the first element of the chiledNodes. */

console.log(cont.lastChild);
console.log(cont.lastElementChild);

console.log(`count : ${cont.childElementCount}`); /* count of chiled elements. */

console.log(cont.firstElementChild.parentNode);
console.log(cont.firstElementChild.nextSibling);
console.log(cont.firstElementChild.nextElementSibling);
console.log(cont.firstElementChild.nextElementSibling.nextElementSibling);
