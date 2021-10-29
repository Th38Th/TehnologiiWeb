/*8 - (Tema) - Implementați o funcție care face compresie RLE (Run Length Encoding) asupra unui fișier text. După implementare, filmați un videoclip în care descrieți soluția propusă. Încărcați o arhivă cu codul sursă aici (https://docs.google.com/forms/d/e/1FAIpQLSexzeYzFmQIUtAAwpr9Wl0oXrWwFAGRtHPZ1GlmcGpYk_StDQ/viewform?usp=sf_link). Completați de asemenea link-ul la videoclip (fie încărcat unlisted pe youtube, fie în drive cu share cadrului didactic de la seminariu). Termenul de livrare a temei este o săptămână.*/
// EEEEEEEOOOOOPPPPPCCCC
// C_lim = 3 => 3E3E1E...
// oegfkeosg
// o1e1g1f1k1e1o1s1g1
// {elem:'E', count: 7}, {elem:'O', count:5} P5C4
// 6E5O5P4C
const SimpleRLE = {
  compress: (seq, c_lim = 0x10ffff) => {
    let res = [];
    let i = 0;
    while (i < seq.length) {
      let c = seq[i];
      let l = 1;
      while (i < seq.length - 1 && seq[i] === seq[i + 1] && l < c_lim) {
        l++;
        i++;
      }
      res.push({
        elem: c,
        count: l
      });
      i++;
    }
    return res;
  },
  decompress: (compr) => {
    let res = [];
    for (let pair of compr) res = res.concat(Array(pair.count).fill(pair.elem));
    return res;
  },
  comp_str: (str, c_lim = 0xff) => {
    if (typeof str !== 'string')
      throw new TypeError(
        'Eroare: Obiectul furnizat pentru comprimare nu este un String!'
      );
    let comp = SimpleRLE.compress(str, c_lim);
    return comp.map((x) => String.fromCodePoint(x.count) + x.elem).join('');
  },
  decomp_str: (str) => {
    if (typeof str !== 'string')
      throw new TypeError(
        'Eroare: Obiectul furnizat pentru decomprimare nu este un String!'
      );
    let comp_dict = [];
    for (let i = 0; i < str.length; i += 2)
      comp_dict.push({ elem: str[i + 1], count: str.codePointAt(i) });
    return SimpleRLE.decompress(comp_dict).join('');
  },
  comp_str2: (str, c_lim = 0xff) => {
    if (typeof str !== 'string')
      throw new TypeError(
        'Eroare: Obiectul furnizat pentru comprimare nu este un String!'
      );
    let comp = SimpleRLE.compress(str, c_lim);
    let result = '';
    let multi_single = false;
    for (let i = 0; i < comp.length; i++) {
      if (comp[i].count === 1) {
        if (!multi_single) {
          result += '\x00';
          multi_single = true;
        }
      } else {
        if (multi_single) {
          result += '\x00';
          multi_single = false;
        }
        result += String.fromCodePoint(comp[i].count);
      }
      if (comp[i].elem === '\x00') result += '\x00';
      result += comp[i].elem;
    }
    return result;
  },
  decomp_str2: (str) => {
    if (typeof str !== 'string')
      throw new TypeError(
        'Eroare: Obiectul furnizat pentru decomprimare nu este un String!'
      );
    let result = '';
    let multi_single = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '\x00') {
        if (str[i + 1] === '\x00') {
          result += '\x00';
          i++;
        } else {
          if (!multi_single) multi_single = true;
          else multi_single = false;
        }
      } else {
        if (multi_single) {
          result += str[i];
        } else {
          result += str[i + 1].repeat(str.codePointAt(i));
          i++;
        }
      }
    }
    return result;
  },
  comp_file: async function (file) {
    let res = new File([SimpleRLE.comp_str2(await file.text())], file.name, {
      type: 'text/plain'
    });
    return res;
  },
  decomp_file: async function (file) {
    let res = new File([SimpleRLE.decomp_str2(await file.text())], file.name, {
      type: 'text/plain'
    });
    return res;
  }
};
