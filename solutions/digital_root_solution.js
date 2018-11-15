function digitalRoot(num) {
  if (num < 10) return num;
  return digitalRoot(num % 10 + Math.floor(num / 10));
}
