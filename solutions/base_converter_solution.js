function baseConverter(num, b) {
  if (num < 1) return '';
  const digits = '0123456789abcdef';
  return baseConverter(Math.floor(num / b), b) + digits[num % b];
}
