// My solution
var palindromeChainLength = function(n, count = 0) {
    const rev = parseInt(n.toString().split('').reverse().join(''))
    return  rev === n ? count : palindromeChainLength(n + rev,count+1);
};

// Top solution
var palindromeChainLength = function(n) {
    var steps = 0;
    while(!isPalindromic(n)) {
        steps++;
        n+=reverseNum(n);
    }
    return steps;
};

function isPalindromic(n) {
    if (n < 0) throw 'isPalindromic only works for positive numbers.';
    if (Math.floor(n / 10) === 0) return true; // Single digit numbers are palindromic.
    if (n % 10 === 0) return false; // n > 0, without leading 0s cannot be palindromic if ending in 0.
    return reverseNum(n) === n;
}

function reverseNum(n) {
    var r = 0;
    while (n) {
        r *= 10;
        r += n % 10;
        n = Math.floor(n / 10);
    }
    return r;
}

// Cleaver solution
var palindromeChainLength = function(n) {
    var r = 1 * n.toString().split('').reverse().join('');
    return n - r && 1 + palindromeChainLength(r + n);
};