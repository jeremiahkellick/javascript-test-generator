Array.prototype.rotate = function(num = 1) {
  const shift = num % this.length;
  return this.slice(shift).concat(this.slice(0, shift));
};
