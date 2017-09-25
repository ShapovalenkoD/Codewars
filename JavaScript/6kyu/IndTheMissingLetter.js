// My solution
function findMissingLetter(array) {
    const res = 'abcdefghijklmnopqrstuvwxyz'.match(new RegExp (array.join('.?'), 'i')).join('').replace(new RegExp (array.join('|'), 'ig'), '');
    return array[0].toLowerCase() === array[0] ? res : res.toUpperCase()
}

// Top solution
function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt(0)) {
            return String.fromCharCode(first + i)
        }
    }
    throw new Error("Invalid input")
}

// Cleaver solution
function findMissingLetter(array) {
    var codes = array.map(a => a.charCodeAt(0))
    ,    last = codes.length - 1
    ,     sum = codes.reduce((a, b) => a + b)
    ,  expect = (codes[last] + codes[0]) * (codes[last] - codes[0] + 1) / 2;

    return String.fromCharCode(expect - sum);
}