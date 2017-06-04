Array.prototype.flatten = function () {
  const flattened = [];

  this.forEach( (el) => {
    if (el instanceof Array) {
      flattened.push(el.flatten());
    } else {
      flattened.push(el);
    }
  }

  return flattened;
}
