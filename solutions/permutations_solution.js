function permutations(array) {
  if (array.length === 0) return [[]];
  const prevPerms = permutations(array.slice(1));
  const perms = [];
  prevPerms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      perms.push(perm.slice(0, i).concat(array[0]).concat(perm.slice(i)));
    }
  });
  return perms;
}
