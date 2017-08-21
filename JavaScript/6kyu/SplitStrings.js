// My solution
function solution(str){
   let arr = [];
   for (var i = 0; i < str.length; i = i +2) {
     arr.push(str.slice([i], [i+2]))
   }
   const len = arr.length
   if (arr[len - 1].length == 1) { arr[len - 1] = arr[len - 1] + "_" }
   return arr
}

// Top solution 
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

// Clever solution
function solution(str) {
   return (str + "_").match(/../g);
}