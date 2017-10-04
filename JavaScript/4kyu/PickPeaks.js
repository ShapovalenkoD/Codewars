// My solution
function pickPeaks(arr){
    let index = [],
        item = [];
    arr.map(function (x, i) {
        let red = arr.slice(i).reduce((x,y) => x + y, 0) / arr.slice(i).length
        if (x > arr[i + 1] && x > arr[i -1] || x === arr[i + 1] && x > arr[i -1]  && x > red) {
            item.push(x)
            index.push(i)
        }
    })
    return {pos: index, peaks: item}
}

// Top solution
function pickPeaks(arr){
    var result = {pos: [], peaks: []};
    if(arr.length > 2) {
        var pos = -1;
        for(var i=1; i<arr.length;i++){
            if(arr[i] > arr[i-1]) {
                pos = i;
            } else if(arr[i] < arr[i-1] && pos != -1) {
                result.pos.push(pos);
                result.peaks.push(arr[pos]);
                pos = -1;
            }
        }
    }
    return result;
}

// Cleaver solution
function pickPeaks(arr){
    var pos = arr.map((x,i)=>i > 0 ? Math.sign(x - arr[i-1]) * i : 0)
.filter(i => i != 0)
.filter((x,i,a) => i < a.length-1 && (a[i+1] < 0 && x > 0));
    return {pos:pos, peaks:pos.map(i=>arr[i])}
}