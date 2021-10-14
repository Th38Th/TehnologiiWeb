var tabel = [1, 1];
function fib(n) {
  if (n > tabel.length) {
    let s = fib(n - 2) + fib(n - 1);
    tabel.push(s);
    return s;
  } else return tabel[n - 1];
}

if (process.argv.length !== 1) {
  console.log(
    'Numar invalid de argumente! Utilizare: fib n, unde\n\tn - ordinul termenului din sirul lui Fibonacci.'
  );
  process.exit(-1);
} else {
  let ordin = Number(process.argv[0]);
  if (isNaN(ordin)) {
    console.log('Eroare: ordinul trebuie sa fie un numar natural!');
    process.exit(-1);
  } else {
    console.log(
      'Termenul de ordinul ' +
        ordin.toString +
        ' din sirul lui Fibonacci este ' +
        fib(ordin) +
        '.'
    );
  }
}
