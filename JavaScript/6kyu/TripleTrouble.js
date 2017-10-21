// My solution
function tripledouble(num1, num2) {
    num1 = (''+num1).split('').filter((_,i,a) => a[i] === a[i+1] && a[i] === a[i+2])
    num2 = (''+num2).split('').filter((_,i,a) => a[i] === a[i+1] && a[i] !== a[i+2])
    return num1.some(x => num2.includes(x)) ? 1 : 0
}

// Top solution
function tripledouble(num1, num2) {
    for (let i = 0; i < 10; i++) {
        if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
            return 1;
        }
    }
    return 0;
}

// Cleaver solution
function tripledouble(num1, num2) {
    return ~~/(.)(\1{2})(?=.*?,.*?\1{2})/.test(num1 + "," + num2);
}