console.log(`This is tutorial 17 on Events`);

document.getElementById('heading').addEventListener('click', function(e){
    console.log('You have clicked the heading');
    location.href = 'websitename';
    console.log(e);

    let a = e.target;      /* e.target is return element*/
    // a = e.target.className;
    // a = e.target.classList;
    // a = Array.from(e.target.classList);
    // a = e.offsetX;
    // a = e.offsetY;
    // a = e.clientX;
    a = e.clientY;
    console.log(a);
});

document.getElementById('heading').addEventListener("mouseover", function(e){
    console.log('You have clicked the heading');
    location.href = 'websitename';
    console.log(e);

    let a = e.target;      /* e.target is return element*/
    a = e.target.className;
    // a = e.target.classList;
    // a = Array.from(e.target.classList);
    // a = e.offsetX;
    // a = e.offsetY;
    // a = e.clientX;
    // a = e.clientY;
    console.log(a);
});
