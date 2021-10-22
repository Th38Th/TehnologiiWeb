class StreamNrPare {
  #valoare;
  constructor(seed) {
    this.#valoare = seed - (seed % 2);
  }
  get next() {
    this.#valoare += 2;
    return this.#valoare;
  }
}

let st1 = new StreamNrPare(3);
for (let i = 0; i < 10; i++) console.log(st1.next);

let st2 = new StreamNrPare(10);
for (let i = 0; i < 10; i++) console.log(st2.next);
