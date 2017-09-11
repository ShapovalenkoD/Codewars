// My solution
String.prototype.toAlternatingCase=function(){
    return this.split('').map(x=>x==x.toLowerCase()?x.toUpperCase():x.toLowerCase()).join('');
};
// Top solution
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// Cleaver solution
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
    return [...this].map(swapCase).join('');
};