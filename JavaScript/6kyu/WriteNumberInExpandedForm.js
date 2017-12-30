// My solution
function expandedForm(num) {
  num += "";
  let arr = [];
  for (let i = num.length - 1, j = 0; i >= 0; i--, j++) {
    if (num[j] !== "0") {
      arr.push(num[j] + "0".repeat(i))
    }
  }
  return arr.join(" + ") 
}

// Top solution
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");