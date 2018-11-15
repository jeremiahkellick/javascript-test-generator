function exponent(b, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / exponent(b, -n);
  return b * exponent(b, n - 1);
}
