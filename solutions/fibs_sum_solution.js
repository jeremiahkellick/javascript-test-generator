function fibsSum(n) {
  if (n <= 1) return n;
  return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}
