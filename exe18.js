console.log(`This is tutorial 18.`);

let btn = document.getElementById('btn');

btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);
// btn.addEventListener('mouseenter',func4);
// btn.addEventListener('mouseleave',func5);

function func1(e) {
    // console.log(`Single Click`, e);
    e.preventDefault();   /* Default behaviour bypass */
}

// function func2(e) {
//     console.log(`Double Click`, e);
//     e.preventDefault();   /* Default behaviour bypass */
// }

// function func3(e) {
//     console.log(`Mouse Down`, e);
//     e.preventDefault();   /* Default behaviour bypass */
// }

// function func4(e) {
//     console.log(`Mouse Enter`, e);
//     e.preventDefault();   /* Default behaviour bypass */
// }

// function func5(e) {
//     console.log(`Mouse Leave`, e);
//     e.preventDefault();   /* Default behaviour bypass */
// }

document.querySelector('.no').addEventListener('mouseenter', function(){
    console.log(`DIV Mouse Enter`);
});

document.querySelector('.no').addEventListener('mouseleave', function(){
    console.log(`DIV Mouse Leave`);
});

document.querySelector('.container').addEventListener('mousemove', function(){
    console.log(`Mouse Move`);
});

document.querySelector('.container').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetX})`;
});

document.querySelector('.container').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetY})`;
});

document.querySelector('.container').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
});

document.querySelector('.container').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetY}, ${e.offsetY}, ${e.offsetY})`;
});
