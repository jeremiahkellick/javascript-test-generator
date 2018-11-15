Array.prototype.dups = function() {
  const result = {};

  this.forEach((el, i) => {
    if (result[el] === undefined) result[el] = [];
    result[el].push(i);
  });

  Object.keys(result).forEach(key => {
    if (result[key].length < 2) delete result[key];
  });

  return result;
};
