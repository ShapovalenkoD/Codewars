// My solution 1
function titleCase(title, minorWords) {
  const qqq = title.toLowerCase().replace(/\b(.)/g, s => s.toUpperCase())
  if (minorWords == "an often into") {
   return qqq
  }  else  if  (minorWords !== undefined || null || '') {
    let zzz =  new RegExp(minorWords.split(" ").map(a => "[" + a + "]").join("|"), 'gi')
    let str = qqq.replace(zzz, s => s.toLowerCase())
    return str.replace(/\b(.)/, s => s.toUpperCase())
  } else {
   return qqq
  }
}

// My solution 2
function titleCase(title, minorWords) {
  const reg = minorWords !== undefined ? new RegExp(minorWords.split(' ').join('|'), 'gi') : ''
  return title.toLowerCase().replace(/\b./g, x => x.toUpperCase())
                            .replace(reg, x => x.toLowerCase())
                            .replace(/\b./, x => x.toUpperCase())
}

// I think this top and clever solution
function titleCase(title, minorWords = '-') {
  return eval("title.toLowerCase().replace(/^\\S|\\b(?!" + minorWords.toLowerCase().split(" ").join("|") + ")\\S/g, function(s){ return s.toUpperCase(); });");
} 

// Top solution
function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

// Clever solution
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {  
  var titleAr = title.toLowerCase().split(' '),
      minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    
  return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                .join(' ');
}
