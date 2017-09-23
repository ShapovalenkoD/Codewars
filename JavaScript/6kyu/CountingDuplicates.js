// My solution
function duplicateCount(text){
    let count = 0;
    text = text.toLowerCase().split('').sort()
    for (let i = 0; i < text.length; i++){
        if (text[i] === text[i + 1] && text[i] !== text[i - 1]) count++
    }
    return count
}

// Top solution
function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

// Cleaver solution
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}