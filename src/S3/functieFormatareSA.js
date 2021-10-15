function formatString(s, ...elem) {
  let modif = s;
  for (let i = 0; i < elem.length; i++)
    modif = modif.replace('{' + i + '}', elem[i].toString());
  return modif;
}

function fmtSA1(subst, adj) {
  return formatString('un {0} este {1}', subst, adj);
}

function fmtSA2(subst, adj) {
  return `un ${subst} este ${adj}`;
}

console.log(fmtSA1('calut', 'dragut'));
console.log(fmtSA1('pestisor', 'auriu'));

console.log(fmtSA2('calut', 'dragut'));
console.log(fmtSA2('pestisor', 'auriu'));
