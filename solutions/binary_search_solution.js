Array.prototype.myBsearch = function(target, func) {
  if (func === undefined) func = (a, b) => a - b;
  if (this.length === 0) return null;
  const mid = Math.floor(this.length / 2);
  if (func(target, this[mid]) < 0) {
    return this.slice(0, mid).myBsearch(target, func);
  } else if (func(target, this[mid]) > 0) {
    const result = this.slice(mid + 1, this.length).myBsearch(target, func);
    return result === null ? null : result + mid + 1;
  } else {
    return mid;
  }
};
