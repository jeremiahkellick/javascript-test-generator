Array.prototype.quickSort = function(func) {
  if (func === undefined) func = (a, b) => a - b;
  if (this.length === 0) return [];
  const pivot = this[0];
  const left = [];
  const right = [];
  for (let i = 1; i < this.length; i ++) {
    func(this[i], pivot) < 0 ? left.push(this[i]) : right.push(this[i]);
  }
  return left.quickSort(func).concat(pivot).concat(right.quickSort(func));
};
