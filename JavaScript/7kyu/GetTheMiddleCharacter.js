// My solytion
function getMiddle(s) {
  const a = s.length
  const z = Math.ceil(a / 2 - 1)
  return a % 2 == 1 ? s.slice(z, z + 1) : s.slice(z, z + 2)
}

// Top solution
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}