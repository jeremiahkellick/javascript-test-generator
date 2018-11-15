function deepDup(arr) {
  return arr.map(el => el instanceof Array ? deepDup(el) : el);
}
