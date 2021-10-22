function ExpGen() {
  const cache = {};
  const Exp = (a, n) => {
    if (!cache[a]) cache[a] = [1];
    if (n < cache[a].length) {
      console.log(`Found ${a}^${n}.`);
    } else {
      console.log(`Calculated ${a}^${n}.`);
      cache[a][n] = Exp(a, n - 1) * a;
    }
    return cache[a][n];
  };
  return Exp;
}

const exp = ExpGen();
console.log(exp(6, 7));
console.log(exp(3, 14));
console.log(exp(10, 6));
console.log(exp(6, 3));
console.log(exp(3, 8));
console.log(exp(10, 3));
