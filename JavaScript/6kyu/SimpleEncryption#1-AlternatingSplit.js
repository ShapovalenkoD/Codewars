// My solution
function encrypt(text, n) {
  if (n <= 0 || text == null) {
    return text
  } else {
  n--
  const spl = text.split("")
  text = spl.filter((x, i) => i % 2 != 0).join('') +
         spl.filter((x, i) => i % 2 == 0).join('') 
  return encrypt(text, n)
  }
}
function decrypt(encryptedText, n) {
  if (n <= 0) {
    return encryptedText
  } else {
  n--
  const spl = encryptedText.split("")
  const arrayStart = spl.slice(0, ~~(spl.length / 2))
  const arrayEnd = spl.slice(~~(spl.length / 2))
  encryptedText = []
  for (var i = 0; i < Math.ceil(spl.length / 2); i++) {
    encryptedText.push(arrayEnd[i]) +encryptedText.push(arrayStart[i])
  }
  encryptedText = encryptedText.join('')
  return decrypt(encryptedText, n)
  }
}

// Top solution 
function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text; 
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}

// Clever solution 
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}