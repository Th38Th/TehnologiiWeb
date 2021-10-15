let medie = (arr) => {
  return arr.reduce((m, t) => m + t, 0) / arr.length;
};

console.log(medie([6, 7, 3, 1, 1, 21, 2, 32, 436, 14, 12, 124]));
console.log(medie([-31, 45.12, 132.32, -436, 1.34, 1.52, 12.34]));
