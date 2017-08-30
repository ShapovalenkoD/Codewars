// My solution
function validBraces(parens){
    var re = /\(\)|\{\}|\[\]/;
    while (re.test(parens)) parens = parens.replace(re, "");
    return !parens;
}

// Top solution
function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;

    for (var i=0; i<braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) { // opening braces
            stack.push(currentChar);
        } else { // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}

// Cleaver solution
function validBraces(braces){
    while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
    return !braces.length;
}

// second Cleaver solution
function validBraces(braces){
    while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
        braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    }
    return braces.length == 0;
}