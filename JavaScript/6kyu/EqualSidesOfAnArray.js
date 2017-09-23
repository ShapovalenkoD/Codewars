// My solution
function findEvenIndex(arr){
    for (let i = 1; i < arr.length; i++) {
        if (arr.slice(0, i).reduce((x,y) => x + y, 0) === arr.slice(i+1).reduce((x,y) => x+y, 0)) {
            return i
        }
    }
    return -1
}

// Top solution
function findEvenIndex(arr)
{
    for(var i=1; i<arr.length-1; i++) {
        if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
            return i;
        }
    }
    return -1;
}
