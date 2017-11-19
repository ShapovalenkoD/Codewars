// My solution
const deNico = (key, message) => {
	const keySort = key.split('').sort(),
				keyNumber = key.split('').map(x => keySort.indexOf(x)),
				result = message.match(new RegExp ('.{0,' + key.length + '}', 'g'))
												.map(x => x.split('').map((_, i, arr) => arr[keyNumber[i]]))
	return result.map(x => x.join('')).join('').replace(/\s*$/,'')
}
// Top solution
const deNico = (key, m) => {
	let codder = key.split('').sort().map(e => key.indexOf(e));
	return m.split('').map((_, i) => m[Math.floor(i/key.length)*key.length + codder.indexOf(i % key.length)]).join('').replace(/\s+$/,'');
}

// Cleaver solution
const deNico = (key, m) => (
		(code, len) => [...m].reduce((acc, _, i) => (
		acc + m[~~(i / len) * len + code.indexOf(i % len)]
), '').replace(/\s+$/,'')
)([...key].sort().map(e => key.indexOf(e)), key.length)