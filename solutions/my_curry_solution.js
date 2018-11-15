Function.prototype.myCurry = function(numArgs) {
  const that = this;
  const args = [];
  return function _myCurry(arg) {
    args.push(arg);
    if (args.length === numArgs) return that.apply(null, args);
    return _myCurry;
  };
};
