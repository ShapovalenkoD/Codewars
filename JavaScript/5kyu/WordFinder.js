// My solution
function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
    let res = [], len = pattern.length
    let reg = new RegExp('^' + pattern.replace(/\?/g, '.').concat('$'))
    for (let i = 0; i < this.words.length; i++) {
        if (reg.test(this.words[i])) {
            res.push(this.words[i])
        }
    }
    return res;
}

// Top solution
function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
    pattern = new RegExp('^'+pattern.replace(/\?/g, '.')+'$');
    return this.words.filter(pattern.test.bind(pattern));
}

// Cleaver solution
function Dictionary(words) {this.words = words;}
Dictionary.prototype.getMatchingWords = function(pattern) {
    var re=new RegExp('^'+ pattern.replace(/\?/g, '[a-z]')+'$');
    return this.words.filter(function(v) {return v.match(re);});
}