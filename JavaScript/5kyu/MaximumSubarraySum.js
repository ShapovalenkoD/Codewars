// My solution
var maxSequence = function(arr){
    if (arr.reduce((x,y) => x + y, 0) === 0) return 0
    let res = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length; j > 0; j--) {
            let check = arr.slice(i, j),
                ar = check.reduce((x,y) => x + y, 0);
            if (res < ar) res = ar
        }
    }
    return res
}

// Top solution
var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
    }
    return ans;
}

// Cleaver solution
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}