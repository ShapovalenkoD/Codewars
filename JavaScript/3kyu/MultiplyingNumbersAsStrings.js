// My solution
function multiply(a, b){
    let sumrow = a.split('').map(x => sumRow(b.split('').map(y => y * x)));
    return sumColumn(addZero(sumrow)) || '0'
}

function sumColumn (arr) {
    let res = [];
    for (let i = arr[0].length - 1; i >= 0; i--) {
        let sum = 0
        for (let len = arr.length - 1; len >= 0; len--) {
            sum += arr[len][i]
        }
        res.unshift(sum)
    }
    return sumRow(res).join('').replace(/^0*/, '')
}

function addZero(arr) {
    for (let len = arr.length - 1, j = 0; len; len--, j++) {
        for (let i = len; i; i--) {
            arr[j].push(0)
        }
    }
    for (let len = arr.length - 1; len; len--) {
        for (let i = len; i; i--) {
            arr[len].unshift(0)
        }
    }
    return arr
}

function sumRow(arr) {
    let len = arr.length
    arr.unshift(0)
    while (len) {
        let num = ~~(arr[len] / 10)
        arr[len - 1] += num
        arr[len] = ~~(arr[len] - num * 10)
        len--
    }
    return arr
}

// Top solution
function multiply(a, b) {
    var aa = a.split('').reverse();
    var bb = b.split('').reverse();

    var stack = [];

    for (var i = 0; i < aa.length; i++) {
        for (var j = 0; j < bb.length; j++) {
            var m = aa[i] * bb[j];
            stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
        }
    }

    for (var i = 0; i < stack.length; i++) {
        var num = stack[i] % 10;
        var move = Math.floor(stack[i] / 10);
        stack[i] = num;

        if (stack[i + 1])
            stack[i + 1] += move;
        else if (move != 0)
            stack[i + 1] = move;
    }


    return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}

// Cleaver solution
function multiply(a, b) {
    return a.split('').reduceRight((p, a, i) =>
        b.split('').reduceRight((p, b, j) => {
    const mul = (a - '0') * (b - '0');
    const p1 = i + j;
    const p2 = p1 + 1;
    const sum = mul + valOrZero(p[p2]);

    p[p1] = valOrZero(p[p1]) + Math.floor(sum / 10);
    p[p2] = sum % 10;

    return p;
}, p)
, []).join('').replace(/^0+(?=\d)/, '');
}

function valOrZero(v) {
    return v || 0;
}