describe("myReverse", () => {
  beforeEach( () => {
    const a = [ "a", "b", "c", "d" ];
  });

  it "Reverses an array", () => {
    expect(a.myReverse()).toEqual(a.reverse())
  });
});
