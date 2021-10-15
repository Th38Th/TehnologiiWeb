function sortArray(arr, key) {
  switch (typeof arr[key]) {
    case Number:
      return arr.sort((a, b) => a[key] - b[key]);
    case String:
      return arr.sort((a, b) => a[key].localeCompare(b[key]));
    default:
      return arr.sort((a, b) => (a[key] > b[key]) - (a[key] < b[key]));
  }
}

let arr = [
  { nume: 'Mere', pret: 6.76, exp: new Date(2022, 3, 2) },
  { nume: 'Caise', pret: 7.83, exp: new Date(2022, 5, 5) },
  { nume: 'Prune', pret: 2.12, exp: new Date(2021, 11, 3) },
  { nume: 'Afine', pret: 4.98, exp: new Date(2022, 1, 4) },
  { nume: 'Vinete', pret: 5.98, exp: new Date(2021, 12, 11) },
  { nume: 'Varza', pret: 1.98, exp: new Date(2021, 12, 23) }
];

console.log(sortArray(arr), 'nume');
console.log(sortArray(arr), 'pret');
console.log(sortArray(arr), 'exp');
