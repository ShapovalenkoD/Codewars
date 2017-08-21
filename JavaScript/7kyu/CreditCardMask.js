// My solution
function maskify(cc) {
  const arr = cc.length
  const first = cc.substring(0, arr-4);
  const second = cc.substring(arr-4, arr);
  return arr < 5 ? cc : first.replace(/\w/g,"#") + second;
}

// Top solution 
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// Second solution 
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

// Array solution
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}
cc = cc.join("");
return cc
}

