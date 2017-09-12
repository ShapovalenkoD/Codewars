// My solution
function countSmileys(arr) {
    return arr.filter(x => /^(:|;)(-|~)?(\)|D)/.test(x)).length
}

// Top solution
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

// Cleaver solution
const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);