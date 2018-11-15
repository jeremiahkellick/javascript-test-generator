function titleize(title) {
  return title.split(' ').map((word, i) =>
    titleize.smallWords.includes(word) && i !== 0 ? word : (
      word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
  ).join(' ');
}

titleize.smallWords = ['a', 'and', 'of', 'over', 'the'];
