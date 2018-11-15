Array.prototype.myReverse = function() {
  return this.map((_, i) => this[this.length - 1- i]);
};
