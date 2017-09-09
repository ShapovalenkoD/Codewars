// My solution
function alphabetPosition(text) {
    return text.toLowerCase().replace(/[^a-z]/g, '').split('').map(x => x.charCodeAt() - 96).join(' ');
}

// Top solution
function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }

    return result.slice(0, result.length-1);
}

// Cleaver solution
function alphabetPosition(text) {
    return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
}