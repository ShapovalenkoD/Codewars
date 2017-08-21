// My solution
function flatten() {
    let result = [];
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            result = result.concat(flatten(...arguments[i]));
        } else {
            result.push(arguments[i])
        };
    } return result;
};
flatten(1, [2, 3], 4, 5, [6, [7]]);

// Top solution
function flatten(){
    return [].slice.call(arguments).reduce(function(a,b){
        return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
    },[]);
}
