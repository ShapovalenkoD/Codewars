// My solution
function nbYear(p0, percent, aug, p) {
  let count = 0 
  for (var i  = 0 ; p0 < p; i++) {
    p0 = p0 + p0 * percent / 100 + aug
    count++
  }
  return count
}

// Top solution
function nbYear(p0, percent, aug, p) {
  for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}

// Clever solution 
function nbYear(p0, percent, aug, p) {
  if(p0 >= p) {
    return 0;
  } else {
    return 1+nbYear(p0*(1+percent/100)+aug, percent, aug, p);
  }
}