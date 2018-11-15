String.prototype.realWordsInString = function(dictionary) {
  return dictionary.filter(word => this.includes(word));
};
