// My solution
function goodVsEvil(good, evil){
  const goodPower = [1, 2, 3, 3, 4, 10]
  const evilPower = [1, 2, 2, 2, 3, 5, 10]
  const goodValue = good.split(" ").map((value, index) => value * goodPower[index]).reduce((a,c) => a + c)
  const evilValue = evil.split(" ").map((value, index) => value * evilPower[index]).reduce((a,c) => a + c)
  if (goodValue > evilValue) {
    return "Battle Result: Good triumphs over Evil"
  } else if (goodValue < evilValue) {
    return "Battle Result: Evil eradicates all trace of Good" 
  } else {
    return "Battle Result: No victor on this battle field"
  }
}

// Top solution 
function goodVsEvil(good, evil) {  
  var getWorth = function( side, worth ) {
    return side.split(' ').reduce( function(result, value, index) { 
      return result + (worth[index] * value);
    }, 0);
  }

  var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
}