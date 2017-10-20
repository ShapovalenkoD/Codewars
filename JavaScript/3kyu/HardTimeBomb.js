// My solution
Bomb.CutTheWire(boom());
function boom () {
    for (let keys in this) {
        if (/^boom\d$/.test(keys)) return this[keys]
    }
}


// Top solution
for (var name in this) {
    if (typeof this[name] === 'number') {
        Bomb.CutTheWire(this[name]);
    }
}

// Cleaver solution
for (var i in global) if (i.indexOf('boom') === 0) Bomb.CutTheWire(global[i]);