// My solution
var findMissing = function (list) {
    const len = list.length;
    let step = 0;
    if (list[0] < 0 && list[len - 1] < 0) {
        step = Math.abs((list[len - 1] - list[0]) / len)
    } else if (list[0] < 0 || list[len - 1] < 0) {
        step = (Math.abs(list[len - 1]) + Math.abs(list[0])) / len
    } else {
        step = (list[len - 1] - list[0]) / len
    }
    if (list[len - 1] < list[0]) list.reverse();
    for (let i = list[0], j = 0; i <= list[len - 1]; i += step, j++)
        if (list[j] !== i) return i;
};

// Top solution
var findMissing = function (list) {
    var step = (list[list.length - 1] - list[0]) / (list.length);
    return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
}

// Cleaver solution
var findMissing = function (l) {
    return ((l[0]+l[l.length-1])*(l.length+1))/2-(l.reduce((a,b)=>a+b))
}