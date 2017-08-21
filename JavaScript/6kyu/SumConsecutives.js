// My solution
function sumConsecutives(s) {
  let res = []
  let count = s[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != s[i+1]) {
      res.push(count)
      count = s[i+1];
    } else {
      count = count + s[i]
    } 
  }
  return res
}

// Top solution 
function sumConsecutives(s) {
  return s.reduce(function(prev, curr, i, arr) {
    if(curr != arr[i - 1]) prev.push(curr);
    else prev[prev.length - 1] += curr;
    return prev;
  }, []);
}