// My solution
function bouncingBall(h,  bounce,  window) {
  function getBaseLog(x, y) {
    return Math.log(window / h) / Math.log(x);
  }
  if (h > 0 && window < h && bounce < 1 && bounce > 0) {
    return Math.floor(getBaseLog(bounce))*2+1
  } else {
    return -1
  }
}

// Top solution 
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}

// Clever solution
const bouncingBall=(h, b, w)=>(b>=1 || h<w || b<=0) ? -1 : Math.ceil(Math.log(w/h)/Math.log(b))*2-1;