// My solution
function isValidWalk(walk) {
    let gor = 0,
        ver = 0
    walk.map(function (x) {
        if (x == 'n') ver++
        if (x == 's') ver--
        if (x == 'w') gor++
        if (x == 'e') gor--
    })
    return walk.length == 10 && gor + ver == 0
}

// Top solution
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return dt === 10 && dx === 0 && dy === 0
}

// Cleaver solution
function isValidWalk(walk) {
    function count(val) {
        return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

// second cleaver solution
function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
}