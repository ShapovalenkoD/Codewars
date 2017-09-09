// My solution
function comp(array1, array2){
    if (array1 == null || array2 == null) return false
    return  array1.map(x => Math.pow(x,2)).sort().join('') == array2.sort().join('')
}

// Top solution
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

// Cleaver solution
function comp(array1, array2) {
    let arr1 = array1? array1.map(e => e * e).sort((a, b) => a - b): 1;
    let arr2 = array2? array2.sort((a, b) => a - b).join(''): 1;
    return arr1.join('') == arr2;
}