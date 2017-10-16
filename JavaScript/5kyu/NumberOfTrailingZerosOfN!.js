// My solution
function zeros (n) {
    let res = 0;
    for (let i = 1; Math.pow(5, i) < n; i++) {
        res += ~~(n / Math.pow(5, i))
    }
    return res
}

// Top solution
function zeros (n) {
    var zs = 0;
    while(n>0){
        n=Math.floor(n/5);
        zs+=n
    }
    return zs;
}