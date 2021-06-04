function caesarDecrypt(code, key) {
    var res = '';
    for (i = 0; i < code.length; i++) {
        var charCode = code[i].charCodeAt(0);
        var numberOfCharacter = 26;

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            var offset = 0;
            charCode += key;

            if (charCode <= 90) {
                offset = 65;
            } else {
                offset = 97;
            }
            charCode = (charCode - offset) % numberOfCharacter + offset;
        }

        res += String.fromCharCode(charCode);
    };
    return res;
}

console.log(caesarDecrypt("Con bo cuoi zzz", 1));