describe('first_even_numbers_sum', () => {
  it("Correctly returns the sum of the first even number", () => {
    expect(first_even_numbers_sum(1)).toEqual(2);
  });

  it("Returns the sum of the first n even numbers", () => {
    expect(first_even_numbers_sum(6)).toEqual(42);
  });
});
