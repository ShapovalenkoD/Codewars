// My solution
function diamond(n){
    if (n < 3 || n % 2 === 0) return null
    n = Math.ceil(n / 2)
    const arr = [...Array(n)].map((_,i)=>' '.repeat(n-1-i)+'*'.repeat(i*2+1)+'\n'),
    daimond = arr.slice(0,-1).reverse();
    return arr.concat(daimond).join('')
}

// Top solution
function diamond(n){
    if( n%2==0 || n<1 ) return null
    var x=0, add, diam = line(x,n);
    while( (x+=2) < n ){
        add = line(x/2,n-x);
        diam = add+diam+add;
    }
    return diam;
}//z.

function repeat(str,x){return Array(x+1).join(str); }
function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }