function frecv_rel(text) {
  let f = {};
  for (const t of text) {
    if (t !== ' ') {
      if (t in f) f[t]++;
      else f[t] = 1;
    }
  }
  for (const t in f) {
    f[t] /= text.length;
  }
  return f;
}

console.log(frecv_rel('Ana are mere.'));
console.log(frecv_rel('antidisestablishmentarianism'));
console.log(frecv_rel('pneumoultramicroscopicsilicovolcanoconiosis'));
