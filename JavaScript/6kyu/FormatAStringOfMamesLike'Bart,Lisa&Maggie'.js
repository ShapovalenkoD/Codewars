// My solution
function list(names){
  let b = []
  for (let a of names) {
    b.push(a.name)
  }
  let c = b.length
  if (c > 1) {
     return b.splice(0, c - 1).join(", ") + " & " + b.join()
  } else {
    return b.join("")
  }
 }

// Top solution
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }

// Clever solution 
function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}