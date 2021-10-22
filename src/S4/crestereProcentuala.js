function increaseSalary(salarii, procent) {
  if (typeof numere !== Array)
    throw new TypeError('Argumentul 1 trebuie sa fie un vector(Array)!');
  if (typeof procent !== Number)
    throw new TypeError('Argumentul 2 trebuie sa fie un procent(Number)!');
  return salarii.map((o) => o * (1 + procent / 100));
}
