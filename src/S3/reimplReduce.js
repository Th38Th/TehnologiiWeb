const myReduce = (arr, func, start = null) => {
  let rez = start;
  for (const item of arr.reverse()) rez = func(rez, item);
  return rez;
};

console.log(
  myReduce(
    ['Concatenat', 'prin', 'reduce', 'propriu'],
    (c, n) => c + '|' + n,
    ''
  )
);
console.log(
  myReduce([2, 3, 10, 2, 4, 2, 4, 23, 55], (c, n) => c + n ** 2),
  0
);
