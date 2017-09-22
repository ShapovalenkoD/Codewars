// My solution
function divisors(integer) {
    let res = [],
        i = 1;
    while (i < integer - 1) {
        i++;
        if (integer % i === 0) res.push(i)
    }
    return res.length > 0 ? res : integer + ' is prime'
};

// Top solution
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};