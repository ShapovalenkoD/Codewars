// My solution
function findLongest(array){
  let num0 = 0
  let max = array.map(function(num1) {
    let a = num0 + ""
    let b = num1 + ""
    a.length < b.length ? num0 = num1 : 0
    });
  return num0
}

// Top solution
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

// Second solution 
function findLongest(array){
  return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}