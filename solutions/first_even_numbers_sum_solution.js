function firstEvenNumbersSum(n) {
  if (n <= 0) return 0;
  return n * 2 + firstEvenNumbersSum(n - 1);
}
