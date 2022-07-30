import genrandomnumber from '../genrandomnumber.util';
import breaknumintoparts from '../breaknumintoparts.util';
import genColorShades from '../gencolorshades.util';
import hslToHex from '../hsltohex.util';

export default function genColorsSquare(n) {
    let colors = [];

    let h = genrandomnumber(0, 360);
    let s = genrandomnumber(20, 80);
    let l = genrandomnumber(20, 80);

    let chunks = breaknumintoparts(n, 4);

    while(true) {
      colors = []
      
      for (let i = 0; i < 4; i++) {
        if (chunks[i] === 1) {
          colors.push(hslToHex(h, s, l));
        } else {
          colors.push(hslToHex(h, s, l), ...genColorShades(h, s, l, 
                                     genrandomnumber(0, 1) ? -1 : 1, 
                                     genrandomnumber(5, 10),
                                     chunks[i] - 1));
        }

        let isSLSame = genrandomnumber(0, 1);
        
        if (!isSLSame) {
          s = genrandomnumber(20, 80);
          l = genrandomnumber(20, 80);
        }

        h+= 90;

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