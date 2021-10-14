function intercalareArr(a1, a2) {
  let res = null;
  if (a1.length === a2.length) {
    res = [];
    for (let i = 0; i < a1.length; i++) {
      res.push(a1[i]);
      res.push(a2[i]);
    }
  }
  return res;
}

console.log(
  intercalareArr([1345, 213, 25, 32], ['create', 'read', 'update', 'delete'])
);
console.log(
  intercalareArr(
    [[3, 4, 5], true, -0.76],
    ['q', 22, { denumire: 'Mere', pret: 5, qty: 14 }]
  )
);
