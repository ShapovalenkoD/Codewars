// My solution
const rec = (n, x) => x ? x.call(x, n) : n;
const zero = x => rec(0, x);
const one = x => rec(1, x);
const two = x => rec(2, x);
const three = x => rec(3, x);
const four = x => rec(4, x);
const five = x => rec(5, x);
const six = x => rec(6, x);
const seven = x => rec(7, x);
const eight = x => rec(8, x);
const nine = x => rec(9, x);

const plus = a => b => b + a;
const minus = a => b => b - a;
const times = a => b => b * a;
const dividedBy = a => b => b / a;

// Top solution
var n = function(digit) {
    return function(op) {
        return op ? op(digit) : digit;
    }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

// Cleaver solution
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .forEach(function (name, n) {
        this[name] = function (f) { return f ? f(n) : n }
    });

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }