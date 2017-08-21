// My solution
function toWeirdCase(string){
  return string.split(" ").map(x => x.split("").map((x, i) => i % 2 ? x : x.toUpperCase()).join('')).join(" ")
}

// Top solution 
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

// Cleaver solution 
function toWeirdCase(string){
  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}
