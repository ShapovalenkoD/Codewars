// My solution
function humanReadable(sec) {
    const time = [~~(sec / 3600), ~~((sec % 3600) / 60), (sec % 3600) % 60]
    return time.map(x => x.toString().length == 2 ? x : '0' + x).join(':')
}

// Top solution
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}

// Cleaver solution
function humanReadable(seconds) {
    return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
        v = Math.floor(v).toString();
        return v.length == 1 ? '0' + v : v;
    }).join(':');
}