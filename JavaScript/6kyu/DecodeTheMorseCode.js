// My solution
decodeMorse = function(morseCode){
    const arr = morseCode.split("  ")
    let result = []
    for (var i = 0; i < arr.length; i++) {
      let arrI = arr[i].split(" ")
      for (var j =0; j < arrI.length; j++) {
        if (arrI[j] == "") {
          result.push(" ")
        } else {
          result.push(MORSE_CODE[arrI[j]])
        }
      }
    }
  return result.join("").trim()
}

// Top solution
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

// Clever solution 
decodeMorse = function(morseCode){
  return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}