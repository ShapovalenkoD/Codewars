// My solution
function longest(s1, s2) {
 const arr = s1 + s2;
 const arrSort = arr.split("").sort();
 let resultArr = [];
 for (var i = 0; i < arrSort.length; i++) {
   if (arrSort[i] != arrSort[i+1]) {
    resultArr.push(arrSort[i])    
   }
 }
 return resultArr.join("")
}

// Top solution
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Second solution
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

