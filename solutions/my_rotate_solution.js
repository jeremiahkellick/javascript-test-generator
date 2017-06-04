Array.prototype.rotate = function (times = 1) {
  const rotations = times % this.length;
  const rotated = this.slice(0);

  for (let i = 0; i < rotations; i++) {
    rotated.push(rotated.shift())
  }

  return rotated;
}

console.log([1, 2, 3].rotate(5))
