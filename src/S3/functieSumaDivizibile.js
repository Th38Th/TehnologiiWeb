function sumaDivizibile(num_arr, divizor) {
  return num_arr.filter((f) => f % divizor === 0).reduce((s, e) => s + e, 0);
}

console.log(sumaDivizibile([4, 5, 6, 7, 8, 9, 10], 2));
console.log(sumaDivizibile([15, 13, 29, 25, 18], 3));
