// My solution
function wire () {
    for (let i in this) {
        if (typeof this[i] === 'number') return this[i]
    }
}
CutTheWire(wire());

// Top solution
var wire = Object.keys(this).pop()
CutTheWire(this[wire]);