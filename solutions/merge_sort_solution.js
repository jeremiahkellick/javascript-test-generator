Array.prototype.mergeSort = function(func) {
  if (func === undefined) func = (a, b) => a - b;
  if (this.length <= 1) return this;
  const mid = Math.floor(this.length / 2);
  const left = this.slice(0, mid).mergeSort(func);
  const right = this.slice(mid).mergeSort(func);
  return left.merge(right, func);
};

Array.prototype.merge = function(arr, func) {
  const merged = [];
  while (this.length > 0 && arr.length > 0) {
    if (func(this[0], arr[0]) < 0) {
      merged.push(this.shift());
    } else {
      merged.push(arr.shift());
    }
  }
  return merged.concat(this).concat(arr);
};
