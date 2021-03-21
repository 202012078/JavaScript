console.log("Welcome to tutorial 27");

/* Object Literal for creating objects */
let car = {
    name: 'Maruti 800',
    topSpeed: 90,
    run: function () {
        console.log(`car is running`);
    }
}

console.log(car);

/* We have already seen constructors like these */
// new Date();

/* Creating a constructor for cars */
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function() {
        console.log(`${this.name} is running.`);
    }
    this.analyze = function() {
        console.log(`This car is slower by ${200 - this.topSpeed} Km/H than Mercedes.`);
    }
}

let car1 = new GeneralCar(`Nissan`,180);
let car2 = new GeneralCar(`Maruti Alto`,100);
let car3 = new GeneralCar(`Mercedes`,200);
console.log(car1, car2, car3);
