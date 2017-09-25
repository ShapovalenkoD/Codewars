// My solution
function count (string) {
    let res = {}
    string = string.split('')
    for (let i = 0; i < string.length; i++) {
        if (res[string[i]] === undefined)  res[string[i]] = 0
        res[string[i]]++
    }
    return res;
}

// Top solution
function count (string) {
    var count = {};
    string.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}

// Cleaver solution
function count (string) {
    return string.split('').reduce(function(counts,char){
        counts[char] = (counts[char]||0) + 1;
        return counts;
    },{});
}