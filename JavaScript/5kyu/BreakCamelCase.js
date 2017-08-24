// My solution
function solution(string) {
    const a = string.match(/[A-Z]/g, '');
    string = string.replace(/[A-Z]/g, ' _');
    for (let i= 0; i < a.length; i++){
        string = string.replace(/_/, a[i])
    }
    return string;
}

// Top solution
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
}