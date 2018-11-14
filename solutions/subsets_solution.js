function subsets(array) {
  if (array.length === 0) return [[]];
  const prevSubs = subsets(array.slice(0, array.length - 1));
  const last = array[array.length - 1];
  return prevSubs.concat(prevSubs.map(sub => sub.concat(last)));
}
