describe("rotate", () => {
  const arrToRotate = [ "a", "b", "c", "d" ];

  it("Rotates the elements 1 position if no argument is passed in", () => {
    expect(arrToRotate.rotate()).toEqual(["b", "c", "d", "a"]);
  });

  it("Rotates the elements correctly if an argument is passed in", () => {
    expect(arrToRotate.rotate(2)).toEqual(["c", "d", "a", "b"]);
  });

  it("Rotates the elements correctly if a negative argument is passed in", () => {
    expect(arrToRotate.rotate(-3)).toEqual(["b", "c", "d", "a"]);
  });

  it("Rotates the elements correctly for a large argument", () => {
    expect(arrToRotate.rotate(15)).toEqual(["d", "a", "b", "c"]);
  });

});
