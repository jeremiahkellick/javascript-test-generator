Function.prototype.myBind = function(ctx, ...bindArgs) {
  const that = this;
  return function(...callArgs) {
    return that.apply(ctx, bindArgs.concat(callArgs));
  };
};
