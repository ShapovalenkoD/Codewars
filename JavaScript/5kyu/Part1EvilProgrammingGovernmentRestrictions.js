// My solution
var anarchy = function () {
    const one = Math.ceil(Math.random()),
          two = one + one,
          three = one + two;
    return `I can write numbers like, ${one}, ${two}, ${three}.`;
}

// Top solution
var anarchy = function () {
    var one = Math.PI / Math.PI;
    var two = one + one;
    var three = two + one;
    return 'I can write numbers like, ' + one + ', ' + two + ', ' + three + '.';
}

// Cleaver solution
var anarchy = function () {
    var number = +true;
    return 'I can write numbers like, ' + number++ + ', ' + number++ + ', ' + number + '.';
}