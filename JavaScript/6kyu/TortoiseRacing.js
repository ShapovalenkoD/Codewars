// My solution
function race(v1, v2, g) {
  const q = g / (v2 - v1)
  return v2 < v1 ? null : [~~q, ~~(q*60%60), ~~(q*3600%60)]
}

// Top solution 
function race(v1, v2, g){
  let time=g/(v2-v1);
  return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}