function stringIncludeKey(string, key) {
  const keyChars = key.split('');
  for (let i = 0; i < string.length; i++) {
    if (keyChars[0] === string[i]) keyChars.shift();
    if (keyChars.length === 0) return true;
  }
  return false;
}
