// My solution
function myCrib(n) {
	let result = '  '.repeat(n) + '_' + '__'.repeat(n) + '  '.repeat(n) + '\n';
	for (let i = n * 2, j = n; i >= 1 ; i--, j++) {
		result += ' '.repeat(i - 1) + '/' + '_' + '__'.repeat(j) + '\\' + ' '.repeat(i - 1) + '\n';
	}
	if (n > 1) {
		for (let i = 1; i < n; i++) {
			result += '|' + '     ' + '      '.repeat(n - 1) + '|' + '\n';
		}
	}
	result += '|' + '  '.repeat(n) + '_' + '__'.repeat(n - 1) + '  '.repeat(n) + '|' + '\n';
	if (n > 1 ) {
		for (let i = 1; i < n; i++) {
			result += '|' + ' ' + '  '.repeat(n - 1) + '|' +  ' ' + '  '.repeat(n - 1) + '|' + ' ' + '  '.repeat(n - 1) + '|' + '\n';
		}
	}
	result += '|' + '_' + '__'.repeat(n - 1) + '|'  + '_' + '__'.repeat(n - 1)  + '|' + '_' + '__'.repeat(n - 1) + '|';
	return result
}

// Top solution
function myCrib(n) {
	var house=[" ".repeat(n*2)+"_".repeat(n*2+1)+" ".repeat(n*2)]
	for(var i=n*2-1,j=n*2+1;i>=0;i--,j+=2) house.push(" ".repeat(i)+"/"+"_".repeat(j)+"\\"+" ".repeat(i))
	for(var i=1;i<n;i++)                   house.push("|"+" ".repeat(j-2)+"|")
	house.push(["|","_".repeat(n*2-1),"|"].join(" ".repeat(n*2)))
	for(var i=1;i<=n;i++)                  house.push(["|","|","|","|"].join(" _"[~~(i/n)].repeat(n*2-1)))
	return house.join("\n")
}