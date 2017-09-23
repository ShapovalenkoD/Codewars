// My solution
function isMadhavArray(arr){
    let a = 1,
        b = 0,
        len = arr.length;

    while (b < len) {
        a++
        b = a * (a + 1) / 2
    }
    if (a * (a + 1) / 2 === len) {
        return arr.reduce((x, y) => x +y, 0) / a === arr[0] && arr[0] === arr[1] + arr[2]
    }
    return false
}

// Top solution
function isMadhavArray(a) {
    if (a.length < 2 || 0.5 * (Math.sqrt(8 * a.length + 1) - 1) < 0 || Math.abs((0.5 * (Math.sqrt(8 * a.length + 1) - 1)) % 1) > 1e-12) return false;
    let v = a[0];
    for (let i = 1, s = 2; i + s <= a.length; i += s, s++) if (a.slice(i, i + s).reduce((s, n) => s + n, 0) !== v) return false;
    return true;
}