// My solution
var Animal = function (name, type) {
    this.type = type;
    this.name = name;
}
Animal.prototype.toString = function () {
    return this.name + ' is a ' + this.type;
}

// Top solution
var Animal = function(name, type) {
    this.name = name;
    this.type = type;
}
Animal.prototype.toString = function() {
    return this.name + ' is a ' + this.type;
}

// Cleaver solution
class Animal {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return this.name + ' is a ' + this.type;
    }
}