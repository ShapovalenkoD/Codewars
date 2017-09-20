// My solution
var isSquare = function(n){
    return n < 0 ? false : Math.sqrt(n) == ~~(Math.sqrt(n))
}

// Top solution
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}