// My solution
function searchSubstr( fullText, searchText, allowOverlap ){
    if (fullText != "" && searchText != "" && fullText.length >= searchText.length) {
        if (allowOverlap == false) {
            return fullText.match(new RegExp(searchText,"g")).length
        }
        if (allowOverlap == true) {
            return fullText.match(new RegExp("(?="+searchText+")","g")).length
        }
    }
    return 0
}

// Top solution
function searchSubstr(fullText, searchText, allowOverlap) {
    if(searchText == '') return 0;
    var re = new RegExp(searchText, 'g');
    if(allowOverlap) {
        var count = 0;
        while(re.exec(fullText)) {count++; re.lastIndex -= searchText.length - 1;}
        return count;
    } else return (fullText.match(re) || []).length || 0;
}

// Cleaver solution
function searchSubstr( fullText, searchText, allowOverlap ){
    if(fullText == "" || searchText == "") return 0;

    var re = new RegExp(searchText, "g"), count = 0, match;
    while (match = re.exec(fullText)) {
        count++;
        if(allowOverlap) re.lastIndex = match.index+1;
    }
    return count;
}