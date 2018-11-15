describe("transpose", () => {
  //before each necessary
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const smallArr = [
    [1, 2],
    [3, 4]
  ];
  const rectArr = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  const tallRectArr = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];

  it("should transpose a matrix", () => {
    expect(transpose(arr)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });

  it("should transpose a matrix of a different size", () => {
    expect(transpose(smallArr)).toEqual([
      [1, 3],
      [2, 4]
    ]);
  });

  it("should transpose a rectangular matrix", () => {
    expect(transpose(rectArr)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("should transpose a different rectangular matrix", () => {
    expect(transpose(tallRectArr)).toEqual([
      [1, 3, 5],
      [2, 4, 6]
    ]);
  });

  it("should not modify the original", () => {
    transpose(smallArr);
    expect(smallArr).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });
});
