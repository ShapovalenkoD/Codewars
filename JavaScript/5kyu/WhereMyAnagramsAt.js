// My solution
function anagrams(word, words) {
    word = word.split('').sort().join('')
    return words.filter(x => word === x.split('').sort().join(''))
}

// Top solution
String.prototype.sort = function() {
    return this.split("").sort().join("");
};

function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
}