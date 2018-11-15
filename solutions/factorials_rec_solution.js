function factorialsRec(num) {
  if (num < 1) return [];
  if (num === 1) return [1];
  const prevFacs = factorialsRec(num - 1);
  return prevFacs.concat(prevFacs[prevFacs.length - 1] * (num - 1));
}
