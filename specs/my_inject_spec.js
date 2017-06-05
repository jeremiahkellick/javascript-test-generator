describe('Array#my_inject', () => {

  // it('calls the block passed to it', () => {
  //   expect, () => { |block|
  //     ["test array"].my_inject(:dummy, &block)
  //   });.to yield_control.once
  // });

  // it('makes the first element the accumulator if no default is given', () => {
  //   expect, () => { |block|
  //     ["el1", "el2", "el3"].my_inject(&block)
  //   });.to yield_successive_args(["el1", "el2"], [nil, "el3"])
  // });

  // it('yields the accumulator and each element to the block', () => {
  //   expect, () => { |block|
  //     [1, 2, 3].my_inject(100, &block)
  //   });.to yield_successive_args([100, 1], [nil, 2], [nil, 3])
  // });

  // it('does NOT call the built in Array#inject or Array#reduce method', () => {
  //   original_array = ["original array"]
  //   expect(original_array).not_to receive(:inject)
  //   expect(original_array).not_to receive(:reduce)
  //   original_array.my_inject {}
  // });

  // it('with accumulator, it correctly injects and returns answer', () => {
  //   expect([1, 2, 3].my_inject(1) { |acc, x| acc + x }).to eq(7)
  //   expect([3, 3].my_inject(3) { |acc, x| acc * x }).to eq(27)
  // });

  // it('without accumulator, it correctly injects and returns answer', () => {
  //   expect([1, 2, 3].my_inject { |acc, x| acc + x }).to eq(6)
  //   expect([3, 3].my_inject { |acc, x| acc * x }).to eq(9)
  // });
});
