// My solution
function isPangram(string){
    return /.*a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+r+s+t+u+v+w+x+y+z+.*/.test(string
            .toLowerCase().split('').sort().join('').trim())
}

// Top solution
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
}

// Cleaver solution
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}