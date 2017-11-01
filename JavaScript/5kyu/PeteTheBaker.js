// My solution
function cakes(recipe, available) {
    let res = [];
    for (i in recipe) {
        res.push(available[i] / recipe[i] || 0)
    }
    return ~~Math.min.apply(null, res)
}

// Top solution
function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
        return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)
}

// Cleaver solution
const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)