// My solution
function score( dice ) {
    const score = {
        1: 1000,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600
    };
    let res = {},
        sum = 0;
    for (let x of dice) {
        res[x] !== undefined ? res[x]++ : res[x] = 1
    }
    for (let key in res) {
        if (res[key] > 2) {
            sum += score[key]
            res[key] -= 3
        }
    }
    return sum + (res[1] || 0) * 100 + (res[5] || 0) * 50
}
// Top solution
function score( dice ) {
    var dc = [0,0,0,0,0,0];
    var tdr = [1000,200,300,400,500,600];
    var sdr = [100,0,0,0,50,0];
    dice.forEach(function(x){ dc[x-1]++; });
    return dc.reduce(function(s,x,i){
        return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
    },0);
}

// Cleaver solution
function score( dice ) {
    if (dice.length !== 5) return 0;

    let diceStr = dice.sort().join('');
    let score = 0;
    const rules = [
        { reg: /111/, score: 1000 },
        { reg: /666/, score: 600 },
        { reg: /555/, score: 500 },
        { reg: /444/, score: 400 },
        { reg: /333/, score: 300 },
        { reg: /222/, score: 200 },
        { reg: /1/,   score: 100 },
        { reg: /5/,   score: 50 },
    ];

    rules.forEach(rule => {
        while (rule.reg.test(diceStr)) {
        diceStr = diceStr.replace(rule.reg, '');
        score += rule.score;
    }
});

    return score;
}