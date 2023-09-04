function decodeMorseCode(code) {
  let decoded = '';
  const morseCodeMap = {
    '0000001111': 'm',
    '0000000010': 'e',
    // add more mappings for other letters as needed
  };

  for (let i = 0; i < code.length; i += 10) {
    const letter = code.substr(i, 10);
    if (letter === '**********') {
      decoded += ' ';
    } else {
      decoded += morseCodeMap[letter];
    }
  }

  return decoded;
}

console.log(decodeMorseCode('00000011110000000010')); // Output: 'me'
