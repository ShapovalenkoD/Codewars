// My solution
const compose = (f,g) =>
    function(a) {
        return arguments.length > 1 ? f.call(null, g.apply(null, arguments)) : f(g(a))
    }

// Top solution
function compose(f, g) {
    return function() {
        return f(g.apply(this, arguments));
    };
}

// Cleaver solution
function compose(f,g) {
    return function(...a) {
        return f(g(...a));
    }
}