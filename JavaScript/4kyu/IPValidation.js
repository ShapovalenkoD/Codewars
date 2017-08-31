// My solution
function isValidIP(str) {
    return /^([01]?\d{1,2}|2([0-4]\d|5[0-5]))\.([01]?\d{1,2}|2([0-4]\d|5[0-5]))\.([01]?\d{1,2}|2([0-4]\d|5[0-5]))\.([01]?\d{1,2}|2([0-4]\d|5[0-5]))$/.test(str);
}

// Top solution
function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

// Cleaver solution
function isValidIP(str) {
    return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
}