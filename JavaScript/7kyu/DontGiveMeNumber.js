// My solution
function dontGiveMeFive(start, end){ 
  let result = 0; 
  for (var i = start; i <= end; i++) { 
    let j = i + ""; 
    let reg = j.search(/5/g); 
    if (reg == -1) { 
      result++ 
    } 
  } 
  return result 
}

// Top tolution 
function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}

// Clever solution
let result = dontGiveNumber = start => F1 = end => end < start ? 0:!/5/.test(end) + F1(end-1)

// Vasi solution
dontGiveMeFive = (s, e) => Array(e - s + 1).fill().filter((_,i) => !/5/g.test(`${i+s}`)).length;

