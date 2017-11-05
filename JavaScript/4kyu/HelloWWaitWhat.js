// My solution
var helloWorld = function () {
    const Hel = {H: [], e: [], l: []},
        lo = {l: [], o: []},
        World = {W: [], o: [], r: [], l: [], d: []},
        one = +true,
        two = one + one,
        three = two + one;
    let res = one;
    return str(Hel) + str(lo) + sfcp(three, two) + str(World) + sfcp(three, three)
}

function sfcp (numOne, numTwo) {
    const num = +(String(numOne) + numTwo)
    return String.fromCodePoint(num)
}

function str(obj) {
    let arr = [];
    for (let i in obj) {
        arr.push(i)
    }
    return arr.reduce((x,y) => x + y)
}

// Top solution
var helloWorld = function () {
    var one = +true
    var two = one + one
    var four = two + two
    var eight = four + four
    var sixteen = eight + eight
    var thirtytwo = sixteen + sixteen
    var sixtyfour = thirtytwo + thirtytwo
    var sp = thirtytwo
    var excl = thirtytwo + one
    var H = sixtyfour + eight
    var e = sixtyfour + thirtytwo + four + one
    var l = sixtyfour + thirtytwo + eight + four
    var o = sixtyfour + thirtytwo + sixteen - one
    var W = sixtyfour + sixteen + eight - one
    var r = sixtyfour + thirtytwo + sixteen + two
    var d = sixtyfour + thirtytwo + four
    return [H, e, l, l, o, sp, W, o, r, l, d, excl].map(function (c) { return String.fromCharCode(c) }).join([])
}

// Cleaver solution
var helloWorld = function () {
    // Hello World!
    var start = [,,,,,,,,,,,,,,,,,,,].length,
        end = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,].length;
    return helloWorld.toString().slice(start, end);
}