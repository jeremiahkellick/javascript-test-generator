function caesarCipher(str, shift) {
  let result = '';
  str.split('').forEach((char, i) => {
    if (char !== ' ') {
      char = String.fromCharCode(
        (char.charCodeAt(0) - 97 + 26 + shift) % 26 + 97
      );
    }
    result += char;
  });
  return result;
}
