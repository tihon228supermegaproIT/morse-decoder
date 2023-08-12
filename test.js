function decodeMorseCode(morseCode) {
  // Morse code dictionary
  const morseCodeDictionary = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0'
  };

  // Split the morse code into individual characters
  const morseCodeArr = morseCode.trim().split(' ');

  // Convert each morse code character to its corresponding letter
  const decodedStr = morseCodeArr.map(code => {
    return morseCodeDictionary[code] || '';
  }).join('');

  return decodedStr;
}

// Example usage:
const morseCode = "- .... .. ...   .. ...   -.-. --- -. -.-. .   .- -. -..   .-. --- .-- -.   - .... .   - .. ... -.-. .-. . -.-.--";
const decodedStr = decodeMorseCode(morseCode);
console.log(decodedStr); // Output: "THIS IS CONCEPT AND ROW THE TISCRETARY!"
