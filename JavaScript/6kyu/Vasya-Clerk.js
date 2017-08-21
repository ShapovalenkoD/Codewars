// My solution
function tickets(peopleInLine){
let res = "";
let count25 = 0;
let count50 = 0;
peopleInLine.map(function(s) {
  if (s == 25) {
    count25++
  } else if (s == 50 && count25 > 0) {
    count50++ 
    count25--
  } else if (s == 100 && count50 > 0 && count25 > 0) {
    count50--
    count25--
  } else if (s == 100 && count50 == 0 && count25 > 2) {
    count25 = count25 - 3
  } else {
    res = "YES"
  };
});
return res == "YES" ? "NO" : "YES"
}

// Top solution
function tickets(peopleInLine) {
  var bills = [0, 0, 0]
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++
        break
        
      case 50:
        bills[0]--
        bills[1]++
        break
        
      case 100:
        bills[1] ? bills[1]-- : bills[0] -= 2
        bills[0]--
        break
    }
    
    if (bills[0] < 0) {
      return 'NO'
    }
  }
  
  return 'YES'
}

