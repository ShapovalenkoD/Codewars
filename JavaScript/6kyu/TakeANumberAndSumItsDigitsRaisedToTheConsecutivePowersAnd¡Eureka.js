// My solution
function sumDigPow(a, b) {
    let res = [];
    for (; a <= b; a++) {
        if (String(a).split('').map((x,i) => Math.pow(x, i + 1)).reduce((x,y) => x + y, 0) === a) {
            res.push(a)
        }
    }
    return res
}


// Top solution
function sumDigPow(a, b) {
    var ans = [];
    while(a <= b){
        if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
        ans.push(a);
        a++;
    }
    return ans;
}