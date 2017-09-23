// My solution
function findNb(m) {
    let res = 0,
        count = 0;

    while (m > 0) {
        res = Math.pow(count,3)
        m = m - res
        count++
    }
    return (m === 0) ? count - 1 : -1
}

// Top solution
function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
}

// Cleaver solution

// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square
function findNb(m) {
    m = Math.sqrt(m) * 2;
    if (m != parseInt(m)){
        return -1;
    }
    var result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}