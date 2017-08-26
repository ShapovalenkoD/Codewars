// My solution
function toCamelCase(str){
    return str.replace(/[-_]+./g, n => n.toUpperCase().substring(n.length-1,n.length);
}

// Top solution
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}

// Cleaver solution
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}