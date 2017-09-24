// My solution
function tribonacci(signature,n){
    for (let i = n; i > 3; i--) {
        signature.push(signature.slice(-3).reduce((x,y) => x + y))
    }
    return signature.slice(0, n)
}

// Top solution
function tribonacci(signature,n){
    for (var i = 0; i < n-3; i++) { // iterate n times
        signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
}