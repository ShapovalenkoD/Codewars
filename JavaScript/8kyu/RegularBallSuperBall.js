// My solution
var Ball = function(ballType) {
    ballType === undefined ? this.ballType = 'regular' : this.ballType = 'super'
};

// Top solution
var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
};
