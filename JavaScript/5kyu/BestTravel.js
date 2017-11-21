// My solution
function chooseBestSum (t, k, ls, summ = 0){
	if (Math.min(...ls) > t || k > ls.length) return null
	let result = [],
			help = summ;
	for (let i = 0; i <= ls.slice(k).length; i++) {
		summ = ls[i] + help
		if (k > 1) {
			let aaa = ls.slice(i + 1)
			result.push(chooseBestSum (t, k - 1, aaa, summ))
		} else {
			result.push(summ)
		}
	}
	const minValue = Math.max(...result.filter(x => x <= t))
	return minValue > 0 ? minValue : null
}
// Top solution
function chooseBestSum(t, k, ls) {
	if(k == 0) {
		return 0;
	}
	if(t <= 0 || k < 0 || ls.length < k) {
		return null;
	}
	var best = 0;
	for(var i = 0; i < ls.length; i++) {
		var l = ls.slice();
		l.splice(i, 1);
		var v = ls[i], c = chooseBestSum(t-v, k-1, l);
		if(c != null && c+v > best && c+v <= t) {
			best = c+v;
		}
	}
	return best > 0 ? best : null;
}

// Cleaver solution
function chooseBestSum(t, k, ls) {
	let best = null;
	function f(l,s,z) {
		for (let i=z; i<ls.length;i++) {
			let _l = l+1,
					_s = s + ls[i],
					_z = i+1;
			if ( _l===k && _s <= t && _s > best) best = _s;
			if (_l < k && _s < t) f(_l,_s,_z);
		}
	}
	f(0,0,0);
	return best;
}