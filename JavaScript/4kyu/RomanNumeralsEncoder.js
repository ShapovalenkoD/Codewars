// My solution
function solution(number){
    const lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for ( i in lookup ) {
        while ( number >= lookup[i] ) {
            roman += i;
            number -= lookup[i];
        }
    }
    return roman
}

// Top solution
function solution(number){
    // convert the number to a roman numeral
    var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

    var ans = '';
    while(number>0){
        for(a in roman){
            if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

        }
    }
    return ans;
}

// Cleaver solution
function solution(number){
    return [
        { threshold: 1000, char: 'M'},
        { threshold: 900,  char: 'CM'},
        { threshold: 500,  char: 'D'},
        { threshold: 400,  char: 'CD'},
        { threshold: 100,  char: 'C'},
        { threshold: 90,   char: 'XC'},
        { threshold: 50,   char: 'L'},
        { threshold: 40,   char: 'XL'},
        { threshold: 10,   char: 'X'},
        { threshold: 9,    char: 'IX'},
        { threshold: 5,    char: 'V'},
        { threshold: 4,    char: 'IV'},
        { threshold: 1,    char: 'I'}
    ].reduce(function(prev, curr, idx, arr)
    {
        while(number >= curr.threshold)
        {
            prev += curr.char;
            number -= curr.threshold;
        }

        return prev;
    }, '');
}