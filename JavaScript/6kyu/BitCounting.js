// My solution
const countBits = n => n > 0 ? n.toString(2).match(/1/g).length : 0

// Top solution
function countBits(n) {
    for(c=0;n;n>>=1)c+=n&1
    return c;
}

// Cleaver solution
countBits = n => n.toString(2).split('0').join('').length;