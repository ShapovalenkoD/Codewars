// My solution
function duplicateEncode(word){
    return word.toLowerCase().split('').map(function (x,_,arr) {
        return arr.filter(z => z === x).length == 1 ? '(' : ')'
    }).join('')
}

// Top solution
function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}