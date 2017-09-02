// My solution
function solution(input, markers){
    markers = new RegExp(("\\s(\\" + markers.join("|\\")) + ")\\.*" ,"g")
    return input.replace(markers, '')
}

// Top solution
function solution(input, markers) {
    return input.split('\n').map(
        line => markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
    ).join('\n')
}

// Cleaver solution
function solution(input, markers){
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}