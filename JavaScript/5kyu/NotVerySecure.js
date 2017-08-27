// My solution
function alphanumeric(string){
    return /\w/g.test(string) && /\s|\W|\_/.test(string) == false
}

// Top solution
let alphanumeric = s => /^[a-z\d]+$/i.test(s);