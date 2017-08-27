// My solution
const rot13 = str => str.replace(/[a-zA-Z]/g, x =>
    String.fromCodePoint((x <= "Z" ? 90 : 122) >= (x = x.codePointAt(0) + 13) ? x : x - 26))


// Top solution
function rot13(str) {
    return str.replace(/[a-z]/ig, function(x){
        return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
    });
}