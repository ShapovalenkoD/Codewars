// My solution
function digital_root(n) {
    if (n.length != 1) {
        n = (n+'').split('').reduce((x,y) => +x + +y)
        return digital_root(n)
    }
    return +n
}

// Top solution
function digital_root(n) {
    return (n - 1) % 9 + 1;
}