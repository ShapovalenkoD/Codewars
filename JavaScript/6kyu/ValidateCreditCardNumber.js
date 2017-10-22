// My solution
function validate(n){
    n = (''+n).split('').map(x => parseInt(x))
    return n.map((x,i) => n.length % 2 === 0 ? i % 2 === 0 ? pow(x) : x : i !== 0 ? x : pow(x))
            .reduce((x,y) => x + y,0) % 10 === 0
}

function pow (x) {
    x = x << 1
    return (x+'').length === 1 ? x : x - 9
}

// Top solution
function validate(n){
    var sum = 0;

    while (n > 0) {
        var a = n % 10;
        n = Math.floor(n / 10);

        var b = (n % 10) * 2;
        n = Math.floor(n / 10);

        if (b > 9) {
            b -= 9;
        }

        sum += a + b;
    }

    return sum % 10 == 0;
}

// Cleaver solution
function validate(n) {
    n = n.toString().split('').map(Number).reverse();
    return n.reduce(function (sum, digit, index) {
            if (index & 1) digit <<= 1;
            if (digit > 9) digit -= 9;
            return sum + digit;
        }, 0) % 10 == 0;
}