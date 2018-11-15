String.prototype.mySlice = function(start, end = this.length) {
  let result = '';
  for (let i = start; i < Math.min(end, this.length); i++) {
    result += this[i];
  }
  return result;
};
