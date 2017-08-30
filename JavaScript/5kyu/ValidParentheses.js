// My solution
function validParentheses(parens){
    parens = parens.split('')
    const len = parens.length
    if (len <= 1 || parens[0] == ')' || parens[len-1] == '(') {
        return false
    }
    for (let i = 0; i < len; i++){
        for (let j = len; j > 0; j--){
            if (parens[i] == '(' && parens[j] == ')') {
                parens[i] = 0
                parens[j] = 0
            }
        }
    }
    let a = (parens.reduce((x, y) => x + y)+'').replace(/0/g, '')
    return a == '' ? true : false
}

// Top solution
function validParentheses(parens){
    var indent = 0;

    for (var i = 0 ; i < parens.length && indent >= 0; i++) {
        indent += (parens[i] == '(') ? 1 : -1;
    }

    return (indent == 0);
}

// Cleaver solution
function validParentheses(parens){
    var re = /\(\)/;
    while (re.test(parens)) parens = parens.replace(re, "");
    return !parens;
}