// My solution
function isMerge(s, part1, part2) {
    const pt1 = part1.split(''),
        pt2 = part2.split(''),
        reg1 = new RegExp ('[' + pt1.join('].*[') + ']'),
        reg2 = new RegExp ('[' + pt2.join('].*[') + ']'),
        t1 = reg1.test(s),
        t2 = reg2.test(s)
    if (part1 == '' && s != '') return reg2.test(s)
    if (part2 == '' && s != '') return reg1.test(s)
    if ([...arguments].join('') == '') return true
    if (/\W/.test(s)) {
        return s.split('').sort().join('') == (part1.split('').concat(part2.split('')).sort().join('')) ? s : false
    }
    return t1 && t2 && part1 != part2 && s.length == part1.length + part2.length
}

// Top solution
function isMerge(s, part1, part2) {
    return !s ? !(part1 || part2) :
        s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
        s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

// Cleaver solution
const createRegExp = str => new RegExp(str.replace(/./g, (c, i) =>
    (i !== 0 ? '.*' : '') + (/\w|\d/.test(c) ? c : ('\\' + c))));
const isMerge = (s, p1, p2) =>
(p1 === p2 && !p1 && !s) ||
(p1 !== p2 && s.length === (p1 + p2).length &&
createRegExp(p1).test(s) && createRegExp(p2).test(s));