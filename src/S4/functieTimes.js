Number.prototype.times = function (f) {
  for (let i = this; i >= 0; i--) f();
};
