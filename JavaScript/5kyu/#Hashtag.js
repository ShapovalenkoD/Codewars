// My solution
function getHashtags(post) {
    let arr = post.match(/(\s|^)#+([A-z]+)(?=(\s|$))/g);
    return arr ? arr.map(x=> x.replace(/#/g,'').trim()) : [];
}

// Top solution
function getHashtags(post) {
    return post.split(' ').filter(function (word) {
        return /^##*[a-zA-Z][^#]*$/.test(word);
    }).map(function (hashTag) {
        return hashTag.replace(/#/g, '');
    });
}

// Cleaver solution
function getHashtags(post) {
    var rx = /(?:\B#+)([a-z]+)(?=\s|$)/gi, matches = rx.exec(post);
    if (matches == null) {return [];}
    return matches.slice(1);
}
