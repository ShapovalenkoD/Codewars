// My solution
function spinWords(s){
    return s.split(' ').map(x => x.length >= 5 ? x.split('').reverse().join('') : x).join(' ')
}

// Top solution
function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

// Cleaver solution
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}