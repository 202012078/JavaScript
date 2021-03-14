let str1 = 'Functions';
let heading = `<h2 style="color:#ff0000; text-align:center;"> 
                Disscuss about <u>${str1}</u>
                </h2><br>
                <h3 style="color:#ff0000; text-align:center;">
    let/const has block level scope! <br> var has function level scope!</h3>`;
document.body.innerHTML = heading;

console.log(`Discuss about functions`);

function greet(name){
    let message = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. Happy birthday!`;

    return message;
}

const myGreet = function(name){
    let message = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. Happy birthday!`;

    return message;
}

let name = 'Bhavya';
greet(name);

let val = greet(name);
let val1 = myGreet(name);
console.log(val1);

const myObj = {
    name: 'Mihir',
    game: function(){
        return 'Hitman 3';
    }
}
console.log(myObj.game());

arr = ['fruits', 'vegetables', 'furniture'];

arr.forEach(function(element, index, array){
    console.log(element, index);
});
