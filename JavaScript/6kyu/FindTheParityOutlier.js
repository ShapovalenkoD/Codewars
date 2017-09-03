// My solution
function findOutlier(integers){
    return ((integers.filter(x => x % 2 == 0) % 2) == 0) ?
     parseInt(integers.filter(x => x % 2 == 0).join('')) :
     parseInt(integers.filter(x => x % 2 != 0).join(''))
}

// Top solution
function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}