// My solution
function towerBuilder(nFloors) {
    let arr = [], res = [], res2 = [], res3 = [];
    for (let i = 0; i < nFloors; i++) {
        for (let j = 0; j < nFloors * 2 - 1; j++) {
            arr.push('*')
        }
    }
    arr = arr.join('');
    for (let i = 0; i < nFloors; i++) {
        res.push(arr.slice(i * arr.length / nFloors , (i + 1) * arr.length / nFloors))
    }
    for (let i =0; i < nFloors; i++) {
        let acc = res[i];
        let REGOX = new RegExp('\.{'+ i +'}');
        res2.push(acc.replace(REGOX, function arg(){
            let x = '';
            for (let g = 0; g < i; g++) {
                x = x + ' '
            }
            return x
        }))
    }
    for (let i =0; i < nFloors; i++) {
        let acc = res2[i];
        let REGOX = new RegExp('\.{'+ i +'}$');
        res3.push(acc.replace(REGOX, function arg(){
            let x = '';
            for (let g = 0; g < i; g++) {
                x = x + ' '
            }
            return x
        }))
    }
    return res3.reverse()
}

// Top solution 
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

// Cleaver solution
function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}