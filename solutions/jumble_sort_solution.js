function jumbleSort(str, alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')) {
  return str.split('').sort((a, b) =>
    alphabet.indexOf(a) - alphabet.indexOf(b)
  ).join('');
}
