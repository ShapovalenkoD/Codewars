// My solution
function printerError(s) {
    const REGEX = /[a-m]/;
    let count = 0; 
    const l = s.split("").sort().map((y) => REGEX.test(y) ? y : ++count);
    const lastNumber = l[l.length-1]
    return lastNumber == 'm' ? 0 + "/" + l.length : lastNumber + "/" + l.length
}

// Top solution 
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

// Cleave solution 
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
