Array.prototype.myReduce = function (func, acc) {
  let start = 0;
  if (acc === undefined) {
    acc = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) acc = func(acc, this[i]);
  return acc;
};
