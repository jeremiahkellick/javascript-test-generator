Array.prototype.bubbleSort = function(func) {
  if (func === undefined) func = (a, b) => a - b;
  const result = this.slice();
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < result.length - 1; i++) {
      if (func(result[i], result[i + 1]) > 0) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        sorted = false;
      }
    }
  }
  return result;
};
