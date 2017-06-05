describe("#jumble_sort", () => {
  it "defaults to alphabetical order", () => {
    expect(jumble_sort("hello")).toEqual("ehllo");
  });

  it "takes an alphabet array and sorts by that order", () => {
    const alphabet = 'helo'.split('');

    expect(jumble_sort("hello", alphabet)).toEqual("hello");
  });

  it "sorts by a reversed alphabet", () => {
    reverse = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('')
    expect(jumble_sort("hello", reverse)).toEqual("ollhe");
  });
});
