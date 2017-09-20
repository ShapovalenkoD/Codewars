// My solution
function squareDigits(num){
    return +(''+num).split('').map(x => Math.pow(x,2)).join('')
}

// Top solution
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}