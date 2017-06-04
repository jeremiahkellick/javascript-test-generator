Array.prototype.dups = function() {
  const dups = {}

  this.forEach( (el, idx) => {
    dups[el] = dups[el] || [];
    dups[el].push(idx);
  })

  return Object.keys(dups).filter( el => dups[el].length > 1)
}
