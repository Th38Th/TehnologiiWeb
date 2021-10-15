function censorTxt(text, dict) {
  return text
    .split(/\b/)
    .filter((e) => e.replace(/\s+/, ''))
    .map((e) =>
      dict.includes(e) ? e[0] + '*'.repeat(e.length - 2) + e[e.length - 1] : e
    )
    .reduce((c, n) => (/\w+/.test(n) ? c + ' ' + n : c + n));
}

console.log(censorTxt('Really Nigga?', ['Nigga']));
console.log(
  censorTxt('Un vultur sta pe pisc cu un pix in plisc.', ['vultur', 'pix'])
);
