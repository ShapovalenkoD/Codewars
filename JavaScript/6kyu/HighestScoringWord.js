// My solution
function high(x){
    const alf = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6,
        'g': 7, 'h': 8, 'i': 9, 'j': 10,'k': 11,'l': 12,
        'm': 13,'n': 14,'o': 15,'p': 16,'q': 17,'r': 18,
        's': 19,'t': 20,'u': 21,'v': 22,'w': 23,'x': 24,
        'y': 25,'z': 26
    }
    x = x.replace(/\s?\d/g,'')
    if (/^\s*$/.test(x)) {return ''}
    const arrn = x.split(' ').map(x => x.split('').map(x => alf[x]).reduce((x, y)=> x + y))
    const max = Math.max.apply(null, arrn)
    return x.split(' ')[arrn.indexOf(max)]
}

// Top solution
unction high(x){
    var arr = x.toLowerCase().split(" ");
    var sum = 0;
    var holder = 0;
    var holder2 = 0;
    for(var i = 0; i < arr.length; i++) {

        for(var j = 0; j < arr[i].length; j++) {

            sum += arr[i].charCodeAt(j) - 96;

        }

        if (sum > holder) {
            holder = sum;
            holder2 = i;

        }
        sum = 0;
    }
    console.log(arr[holder2]);
    return arr[holder2];

}

// Cleaver solution
const { compose, reduce, split } = require('ramda');

const score = compose(
        reduce((r, v) => r + v.charCodeAt() - 96, 0),
    split('')
);

const high = compose(
    reduce((r, v) => score(v) > score(r) ? v : r, ''),
    split(' ')
);