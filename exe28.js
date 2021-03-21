console.log(`Welcome to tutorial 28`);

let obj = {
    name: "Mihir",
    course: "Msc IT",
    address: "Moon"
}

function Obj(givenName) {
    this.name = givenName;
}

Obj.prototype.givenName = function() {
    return this.name;
}

Obj.prototype.setName = function(newName) {
    this.name = newName;
}

let obj2 = new Obj("Ramlal");
console.log(obj2);
