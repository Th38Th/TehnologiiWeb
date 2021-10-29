import fs from 'fs';

const NUME_DIR = 'director_creat';
const NUME_FIS = 'exemplu.js';

fs.mkdirSync(NUME_DIR);
fs.writeFileSync(
  `${NUME_DIR}/${NUME_FIS}`,
  'console.log("Exemplu fisier creat dinamic")'
);
fs.rmSync(NUME_DIR, { recursive: true, force: true });
