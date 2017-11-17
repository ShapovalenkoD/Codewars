// My solution
function Xbonacci (signature,n){
	let result = signature
	const arrLen = signature.length
	if (arrLen > n) return result.slice(0, n)
	for (let i = arrLen; i < n; i++) {
		let sum = result.slice(-arrLen).reduce((x,y) => x + y, 0)
		result.push(sum)
	}
	return result
}

// Top solution
const Xbonacci = (sig, n) => {
	let len = sig.length;
	for (let i = len; i < n; i++)
		sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
	return sig.slice(0, n);
}

// Cleaver solution