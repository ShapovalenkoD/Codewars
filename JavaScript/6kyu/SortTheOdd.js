// My solution
function sortArray(array) {
    const res = array.filter(x => x % 2 !== 0).sort((a, b) => a - b)
    array.map((x,i) => {
        if (x % 2 === 0) res.splice(i,0, x)
})
    return res
}

// Top solution
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}