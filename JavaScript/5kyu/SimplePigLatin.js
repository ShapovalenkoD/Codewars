// My solution
const pigIt = str => str.split(' ').map(x => x.split('').concat(x[0]+'ay').splice(1,x.length).join('')).join(' ');

// Top solution
function pigIt(str){
    return str.split(' ').map(function(el){
        return el.slice(1) + el.slice(0,1) + 'ay';
    }).join(' ');
}

// Cleaver solution
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}