// My solution
var paintLetterboxes = function(start, end) {
    let res = [],
        res2 = [];
    while (start <= end) {
        res = res.concat(String(start).split(''))
        start++
    }
    for (let i = 0; i <= 9; i++) {
        res2.push(res.filter(x => x == i).length)
    }
    return res2
}


// Top solution
const paintLetterboxes = (start, end) => {
    let res = Array(10).fill(0);
    for (let i = start; i <= end; i++) {
        for (let n of (i + '')) {
            res[n]++;
        }
    }
    return res;
}

// Cleaver solution
const paintLetterboxes = (start, end) => Array(10).fill(0).map((_,i)=> Array(end - start+1).fill(0).reduce((s,a,i)=> s + (start +i),'').split('').filter(e=> e==i).length);