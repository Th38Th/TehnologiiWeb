function arrayDinListaVariadica(...args) {
  let arr = [];
  for (let x of args) arr.push(x);
  return arr;
}

// Separatorul implicit este ','
function arrayDinListaCuSeparator(sircaractere, separator = ',') {
  let arr = [];
  sircaractere.split(separator).forEach((x) => arr.push(Number(x)));
  return arr;
}

console.log(
  arrayDinListaVariadica(
    2,
    -32.4,
    24,
    2,
    5,
    0.213,
    242,
    424,
    2.45,
    542,
    254,
    542,
    6642,
    2
  )
);
console.log(arrayDinListaCuSeparator('4,15,-6,443,3,-1.234,-12.4'));
console.log(arrayDinListaCuSeparator('4|15|-6|443|3|-1.234|-12.4', '|'));
