// My solution
function findOdd(A) {
  for (var i = 0; i < A.length; i++){
    let count = 0;
   for (var j = 0; j < A.length; j++) {
    A[i] == A[j] ? count++ : 0
   }
    if (count % 2 != 0) {
     return A[i]
    }
 }
}

// Top solution 
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
