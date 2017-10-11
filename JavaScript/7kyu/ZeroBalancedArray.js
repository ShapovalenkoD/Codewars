// My solution
function ìsZeroBalanced(n){
    if (n.length === 0) return false
    return n.every(x => n.includes(-x)) && n.reduce((x,y) => x + y, 0) === 0
}

// Top solution
const ìsZeroBalanced = array =>
    array.length > 0 &&
    array.every(n => array.includes(-n)) &&
    array.reduce((sum, n) => sum + n) === 0;
