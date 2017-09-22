// My solution
function order(words){
    let res = []
    words = words.split(' ')
    for (let i = 0; i <= words.length; i++){
        let reg = new RegExp(i);
        res.push(words.filter(x => reg.test(x)))
    }
    return res.join(' ').trim()
}

// Top solution
function order(words){

    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}