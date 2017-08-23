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
        if (array[i] != array[i+1]) {
            count != 1 ? res = res + "(" + array[i] + "**" + count +  ")" :
                res = res + "(" + array[i] + ")"
        }
    }
    return res
}}
// Top solution
function primeFactors(n){
    for (var i=2, res="", f; i <= n; i++) {
        f=0;
        while (n%i == 0) { f++; n/=i }
        res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
    }
    return res || "("+n+")"
}