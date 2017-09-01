// My solution
function formatWords(words){
    return words != null ? words.filter(x => x != '').join(', ').replace(/,(?=[^,]*$)/, ' and') : ""
}

// Top solution
function formatWords(words){
    if (!words) return "";
    return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
}

// Cleaver solution
function formatWords(words){
    return words ? words.filter(function (v) {
        return v.length;
    }).join(', ').replace(/,(?=[^,]*$)/, ' and') : '';
}