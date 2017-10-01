// My solution
sortme = function( names ){
    return names.map(x => x.toLowerCase()).sort()
        .map(x => names.some(z => z === x) ? x : x.slice(0,1).toUpperCase() + x.slice(1))
}

// Top solution
sortme = function( names ){
    return names.sort(function(first, second) {
        return first.toLowerCase().localeCompare(second.toLowerCase())
    })
}

// Cleaver solution
var sortme = function( names ){
    return names.sort((a,b) => { return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1 });
}