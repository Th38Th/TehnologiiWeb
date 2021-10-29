const c = 299792458; // m/s

const resultant = (...vectors) => {
  // vectori de forma {x: <valoare>, y: <valoare>}
  return vectors.reduce((l, r) => ({ x: l.x + r.x, y: l.y + r.y }));
};

export { c, resultant };
