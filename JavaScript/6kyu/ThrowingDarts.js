// My solution
function scoreThrows(radiuses){
    let res = 0
    radiuses.every(x => x < 5) ? res += 100 : 0
    radiuses.map(function (y) {
        if (y < 5) res += 10
        if (5 <= y && y <= 10) res += 5
        if (y > 10) res += 0
    })
    return radiuses.length !== 0 ? res : 0
}


// Top solution
function scoreThrows(radiuses){

    if (radiuses.length <= 0) { return 0 }

    var score = 0
    var award = true
    for(var i = 0; i < radiuses.length; i++) {
        if      (radiuses[i] < 5)   { score += 10 }
        else if (radiuses[i] <= 10) { score += 5; award = false }
        else                        { award = false }
    }

    if (award) { score += 100 }

    return score;
}

// Cleaver solution
function scoreThrows(rr, s){
    return (s=rr.map(function(r){ return r<5? 10: r<=10? 5 : 0 }).reduce(function(s,v){ return s+v},0)), s&&s==10*rr.length? s+100:s;
}