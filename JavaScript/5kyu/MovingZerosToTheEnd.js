// My solution
var moveZeros = function (arr) {
    let res = [], count = 0;
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] !== 0) {
            res.push(arr[i])
        } else {
            count++
        }
    }
    while (count > 0) {
        count--
        res.push(0)
    }
    return res
}
// Top solution
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}