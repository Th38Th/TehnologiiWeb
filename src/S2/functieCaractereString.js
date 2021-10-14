function getNrCaractereDif(str1, str2) {
  let r = 0;
  if (str1.length !== str2.length) r = -1;
  else {
    for (let i = 0; i < str1.length; i++) r += str1[i] !== str2[i];
  }
  return r;
}

console.log(getNrCaractereDif('Mere', 'Pere'));
console.log(getNrCaractereDif('0101100110111', '0111011101000'));
console.log(getNrCaractereDif('CTAGGGACCTCAAA', 'GATCCCTGGAGTTT'));
