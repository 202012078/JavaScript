console.log('Create a website');

let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0];

Array.from(a).forEach(function(element){
    console.log(element);
});

// a = document.links[0];
a = document.images[0].src;
console.log(a);

a = document.images[1].src;
console.log(a);
