import genrandomnumber from '../genRandomNumber.util';
import breaknumintoparts from '../breakNumIntoParts';
import genColorShades from '../genColorShades.util';
import hslToHex from "../convertation/hslToHex.util";

export default function genPaletteTriadic(n) {
  let colors = [];

  let h = genrandomnumber(0, 360);
  let s = genrandomnumber(20, 80);
  let l = genrandomnumber(40, 75);

  let factor = 1;

  let chunks = breaknumintoparts(n, 3);
  let temp = chunks[2];
  chunks[2] = chunks[1];
  chunks[1] = temp;

  while (true) {
    colors = []

    for (let i = 0; i < 3; i++) {
      if (chunks[i] === 1) {
        colors.push(hslToHex([h, s, l]));
      } else {
        colors.push(hslToHex([h, s, l]), ...genColorShades(h, s, l,
          factor,
          genrandomnumber(5, 10),
          chunks[i] - 1));
        factor = factor * -1;
      }

      let isSLSame = genrandomnumber(0, 1);

      if (!isSLSame) {
        s = genrandomnumber(20, 80);
        l = genrandomnumber(20, 80);
      }

      h += 120;

      if (h > 360) {
        h -= 360;
      }
    }

    if (colors.length === n) {
      break;
    }
  }

  return colors;
}