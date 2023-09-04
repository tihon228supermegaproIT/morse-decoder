decodeMorse = function(morseCode) {
    outPut = "";

    for (var i = 0; i < morseCode.split(" ").length; i++) {
        if (i === "   ") {
            outPut += " ";
        } else {
            outPut += MORSE_CODE[morseCode.split(" ")[i]];
        }

    }
    return outPut;
}
