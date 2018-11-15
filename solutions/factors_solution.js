function factors(num) {
  const found = [];
  for (let i = 1; i <= num; i++) if (num % i === 0) found.push(i);
  return found;
}
