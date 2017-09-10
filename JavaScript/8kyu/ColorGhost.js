// My solution
class Ghost {
    constructor () {
        let color = ['yellow', 'purple', 'red', 'white'];
        this.color = color[~~(Math.random()*4)]
    }
}

// Top solution
var Ghost = function() {
    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
};

// Cleaver solution
var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};
