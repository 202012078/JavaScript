/* 
    Value and type is check than use is === in condition.
        ==   --> Check the value.
        ===  --> Check the value and type.
        !=   --> Check the value.
        !=== --> Check the value and type.
        &&   --> Both condition is true.
        ||   --> Atleast one condition is true.
*/
let str1 = 'If else';
let str2 = 'Switches';
let heading = `<h2 style="color:purple; text-align:center;"> 
                Disscuss about <u>${str1}</u> 
                and <u>${str2}</u></h2>`;
document.body.innerHTML = heading;

console.log('This code is describe If else and Switch cases.');

const age = 21;
if(age == 21){
    console.log(`Age is : ${age}`);
}
else if(age == 65){
    console.log(`Age is : ${age}`);
}
else{
    console.log(`Age is not : ${age}`);
}

const vari = 22;
if(typeof vari !== 'undefined') {
    console.log('veri is defined');
}
else{
    console.log('veri is undefined');
}

let doesDrive = true;
if(doesDrive && age>18){
    console.log('You can drive');
}
else{
    console.log('You can not drive');
}

doesDrive = false;
if(doesDrive || age>18){
    console.log('You can drive');
}
else{
    console.log('You can not drive');
}

/* Ternary Operator */
console.log(doesDrive?`You can drive`:`You can not drive`);

/* Switch Cases */
switch (age) {
    case 21:
        console.log(`You are 21`);
        break;

    case 65:
        console.log(`You are 65`);
        break;

    case 100:
        console.log(`You are 100`);
        break;

    default:
        console.log(`Your age is not defined`);
        break;
}
