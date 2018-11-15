function transpose(arr) {
  const result = [];
  for (let i = 0; i < arr[0].length; i++) {
    result.push(arr.map(innerArr => innerArr[i]));
  }
  return result;
}
