// My solution
function findAll (n, k) {
	let combinations = [],
			startNum = [],
			endNum,
			arrMax,
			arrMin,
			combinationsLen;
	for (let i = 0; i < k; i++) {
		startNum.push(1)
	}
	startNum = startNum.join('')
	endNum = startNum * 9
	
	while (startNum <= endNum) {
		if (('' + startNum).split('').reduce((s, x) => +s + +x, 0) === n) {
			combinations.push(startNum)
		}
		startNum++
	}
	
	combinations = combinations.filter(x => ('' + x).split('').map((x,i,arr) => +(x > arr[i+1])).reduce((s, x) => s + x, 0) === 0)
	combinationsLen = combinations.length
	arrMax = Math.max.apply(null, combinations)
	arrMin = Math.min.apply(null, combinations)
	return combinationsLen > 0 ? [combinations.length, '' + arrMin, '' + arrMax] : []
}


// Top solution
function findAll(s, d) {
	const ps = parts(s, d, 1), n = ps.length;
	return n == 0 ? [] : [n, ps[0].join(''), ps[n - 1].join('')];
}

function parts(s, n, p) {
	if (s < p) return [];
	if (n == 1) return s < 10 ? [[s]] : [];
	const a = [];
	for (let i = p; i < 10; ++i)
		for (const xs of parts(s - i, n - 1, i)) a.push((xs.unshift(i), xs));
	return a;
}

// Cleaver solution
function findAll(n, k) {
	if(n>k*9)return [];
	
	function findCount(n,k,c=1) {
		if(n>k*9)return 0;
		if(k===1)return 1;
		var count = 0;
		for(let i=c; i<=~~(n/k); i++) count += findCount(n-i,k-1,i);
		return count;
	}
	var min = '1'.repeat(~~((k*9-n-1)/8))+(n/k<9?(1+(n-k)%8):'')+'9'.repeat(~~((n-k)/8));
	var max = (''+~~(n/k)).repeat(k-n%k)+(''+(~~(n/k)+1)).repeat(n%k);
	return [findCount(n,k),min,max];
}