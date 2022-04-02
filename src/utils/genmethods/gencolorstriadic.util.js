import genrandomnumber from '../genrandomnumber.util';
import breaknumintoparts from '../breaknumintoparts.util';
import genColorShades from '../gencolorshades.util';
import hslToHex from '../hsltohex.util';

export default function genColorsTriadic(n) {
    let colors = [];

    let h = genrandomnumber(0, 360);
    let s = genrandomnumber(20, 80);
    let l = genrandomnumber(20, 80);

    let chunks = breaknumintoparts(n, 3);
    let temp = chunks[2];
    chunks[2] = chunks[1];
    chunks[1] = temp;

    while(true) {
      colors = []
      
      for (let i = 0; i < 3; i++) {
        if (chunks[i] === 1) {
          colors.push(hslToHex(h, s, l));
        } else {
          colors.push(hslToHex(h, s, l), ...genColorShades(h, s, l, 
                                     genrandomnumber(0, 1) ? -1 : 1, 
                                     genrandomnumber(5, 10),
                                     chunks[i] - 1));
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