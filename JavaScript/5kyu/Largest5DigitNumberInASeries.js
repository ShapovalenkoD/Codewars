// My solution
function solution(digits){
    const num = digits.split('')
    return Math.max.apply(null, num.map((x,i) => x =
        (num[i] + 'z' + num[i+1] + 'z' + num[i+2] + 'z' + num[i+3] + 'z' + num[i+4])
            .replace(/z/g, '')).slice(0, -4))
}

// Top solution
function solution(digits){
    if (digits.length <= 5) return Number(digits);
    return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}