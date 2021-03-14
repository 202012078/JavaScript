let str1 = 'Loops';
let heading = `<h2 style="color:green; text-align:center;"> 
                Disscuss about <u>${str1}</u></h2>`;
document.body.innerHTML = heading;

console.log(`Discuss about loops`);

/*
    General Loops
        1. for
        2. while
        3. do-while --> at least one time running.
*/

for(let i = 0; i < 10; i++){
    console.log(`\n${i}`);
}

let j=10;
while(j < 20){
    console.log(`\n${j}`);
    j++;
}

let k = 100;
do{
    console.log(`\n${k}`);
}while(k < 100);

k = 1;
do{
    console.log(`\n${k}`);
    if (k===5) {
        break;
    }
    k++;
}while(k <= 10);

k = 1;
do{
    if (k===5) {
        k++;
        continue;
    }
    k++;
    console.log(`\n${k}`);
}while(k <= 10);

let arr = [1,2,3,4,5,6,7,8,9];
arr.forEach(function(element, index, array){
    console.log(index, element, array);
});

let obj = {
    name: 'Mihir',
    age: 21,
    type: 'Programmer',
    os: 'Windows'
}
for (let key in obj) {
    console.log(`${key} of oblect is ${obj[key]}`);    
}
