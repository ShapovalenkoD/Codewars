// My solution
function chooseBestSum (t, k, ls){
	let result = 0,
			minDifference = t;
			
		for (let i = 0; k + i -1 <= ls.length; i++) {
				let arrSplc = ls,
				arr = arrSplc.slpice(i, k + i - 1);
		
		for (let j = 0; j < arrSplc.length; j++) {
			let sumDist = [...arr, arrSplc[j]].reduce((s,x) => s + x, 0),
			diffDist = t - sumDist;
			if (diffDist >= 0 && diffDist < minDifference) {
				result = sumDist
				minDifference = diffDist
			}
		}
	}
	return result || null
}

// Top solution


// Cleaver solution
