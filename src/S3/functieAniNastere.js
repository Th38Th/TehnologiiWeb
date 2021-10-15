function getVarstePeste18(arr) {
  let y = new Date().getFullYear();
  return arr.map((yr) => y - yr).filter((f) => f > 18);
}

console.log(getVarstePeste18([1987, 2005, 1998, 1956, 2014, 2013, 2001, 2000]));
console.log(getVarstePeste18([2003, 2004, 1996]));
