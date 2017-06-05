Array.prototype.flatten = function () {
  let flattened = [];

  this.forEach( (el) => {
    if (el instanceof Array) {
      flattened = flattened.concat(el.flatten());
    } else {
      flattened.push(el);
    }
  });

  return flattened;
}

console.log([1, 2, 3, [4, [5, 6]], [[[7]], 8]].flatten());
