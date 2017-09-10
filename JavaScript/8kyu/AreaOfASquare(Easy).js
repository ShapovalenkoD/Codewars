// My solution
function squareArea(A){
    return ~~(Math.pow((A * 4) / (2 * Math.PI), 2) * 100) / 100
}

// Top solution
function squareArea(A){
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area*100)/100
}

// Cleaver solution
squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);