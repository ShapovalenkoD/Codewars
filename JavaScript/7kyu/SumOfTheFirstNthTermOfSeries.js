// My solution
function SeriesSum(n) {
  let result = 0;
  let a = 1;
  for (var j = 0; j < n; j++) {
    result = result +  1 / a;
    a = a + 3;
  }
  return result.toFixed(2) 
}

// Top solution
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}
