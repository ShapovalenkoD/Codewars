// My solution
Array.prototype.square = function () { return this.map(x => Math.pow(x,2)) }
Array.prototype.cube = function () { return this.map(x => Math.pow(x,3)) }
Array.prototype.sum = function () { return this.reduce((x, y) => x + y, 0) }
Array.prototype.average = function () { return this.reduce((x, y) => x + y, 0) / this.length }
Array.prototype.even = function () { return this.filter(x => x % 2 === 0) }
Array.prototype.odd = function () { return this.filter(x => x % 2 !== 0) }

// Top solution
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

// Cleaver solution
Object.assign(Array.prototype, {
    square() {return this.map(n => n * n);},
    cube() {return this.map(n => Math.pow(n, 3));},
    sum() {return this.reduce((p,n) => p + n, 0);},
    average() {return this.reduce((p,n) => p + n, 0) / this.length;},
    even() {return this.filter(n => !(n % 2));},
    odd() {return this.filter(n => n % 2);}
});