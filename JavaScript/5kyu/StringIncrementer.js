// My solution
function incrementString (strng) {
    return /\d/.test(strng) ? strng.replace(/\d+/, function plusNull(a){
        let len = a.length, sum = +a + 1, lens = (sum + '').length
        while (len > lens) {
            sum = '0' + sum
            len--
        }
        return sum
    }) : strng + 1
}

// Top solution
function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
        var up = parseInt(p2) + 1;
        return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
}

// Cleaver solution
function incrementString(input) {
    return input.replace(/\d*$/, function(n) {
        var x = ~~n + 1
        return ('0000000' + x).slice(-Math.max(n.length, String(x).length))
    })
}