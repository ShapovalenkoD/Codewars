// My solution
function openOrSenior(data){
  let result = [];
  for (var i = 0; i < data.length; i++) {
    let arrI = data[i];     
    if (arrI[0] >= 55 && arrI[1] > 7) {
      result.push('Senior')
    } else {
      result.push('Open')
    } 
  }
  return result;
}

// Top solution 
function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}

// Clevar solution
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
