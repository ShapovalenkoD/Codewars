// My solution
function getScore(n) {
    let step = 50,
        res = 0;
    for (let i = 0; i < n; i++) {
        res += step
        step += 50
    }
    return res
}

// Top solution
function getScore(n) {
    return n * (n + 1) * 25;
}