describe("myEach", () => {
  beforeEach( () => {
    const callback = x => res.push(2 * el);
    const array = [1, 2, 3];
  })
  it("it passes each element into a callback", () => {
    const res = [];
    array.myEach(callback);
    expect(res).toEqual([2,4,6]);
  });

  it("returns the original array", () => {
    expect(array.myEach(callback).toEqual([1, 2, 3]));
  });
});
