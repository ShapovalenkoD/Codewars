// My solution
function narcissistic( value ) {
    const str = String(value),
        len = str.length;
    return str.split('').map(x => Math.pow(x,len)).reduce((x,y) => x + y) === value
}

// Top solution
function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
            return p + Math.pow(c, ('' + value).length)
        }, 0) == value;
}