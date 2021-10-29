import { c, resultant } from './phys.js';

const getE = (m) => {
  return m * c ** 2; // E (kg*m^2/s^2) = mc^2
};

console.log(c);
console.log(getE(129));
console.log(resultant({ x: 4, y: 2 }, { x: 8, y: 10 }, { x: -12, y: -12 })); // vectorii se anuleaza
