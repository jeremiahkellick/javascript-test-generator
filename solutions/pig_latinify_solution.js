function pigLatinify(sentence) {
  return sentence.split(' ').map(word => pigLatinifyWord(word)).join(' ');
}

function pigLatinifyWord(word) {
  let i = 0;
  while (!'aeiou'.includes(word[i])) i += 1;
  if (word[i - 1] === 'q' && word[i] === 'u') i += 1;
  return `${word.slice(i)}${word.slice(0, i)}ay`;
}

// Regex solution

function regexPigLatinify(sentence) {
  return sentence.split(' ').map(word =>
    word.replace(/([^aeiou]*qu|[^aeiou]*)(.*)/, (_, p1, p2) => `${p2}${p1}ay`)
  ).join(' ');
}
