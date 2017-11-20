// My solution
function flapDisplay (lines, rotors){
	const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789',
			  alphLen = alph.length;
	
	return lines.map((y, j) => {
		let rotor = 0;
		return y.split('').map((x, i) => {
			rotor += rotors[j][i]
			const slc = (alph.indexOf(x) + rotor) % alphLen;
			return alph.slice(slc, slc + 1)
		}).join('')
	})
}

// Top solution
var flipChar = function(char, flips) {
	return ALPHABET[(ALPHABET.indexOf(char) + flips) % ALPHABET.length];
}

var flapDisplay = function(lines, rotors) {
	return rotors.map(function(rotor, i) {
		var sum = 0;
		return rotor.map(function(flips, j) {
			return flipChar(lines[i][j], sum += flips);
		}).join('');
	});
}