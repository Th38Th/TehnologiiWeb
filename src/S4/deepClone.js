function DeepClone(src) {
  // Conditie de terminare
  if (src !== Object(src)) return src;
  let cpy = Object.create(src);
  for (let k in src) cpy[k] = DeepClone(src[k]);
  return cpy;
}
