// My solution
function primeFactors(n){
    let array = [];
    let res = '';
    for (let i = 2; i <= n; i++){
        if (n % i == 0) {
            n = n / i
            array.push(i)
            i = i - 1
        }
    }
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j <= i; j++) {
            if (array[i] == array[j]) {
                count++
            }
        }
        count != 1 ? res = res + "(" + array[i] + "**" + count +  ")" :
                           res = res + "(" + array[i] + ")"
    }
    return res
}
// Top solution


// Cleaver solution
