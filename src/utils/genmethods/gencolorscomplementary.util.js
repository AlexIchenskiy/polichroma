import genrandomnumber from "../genrandomnumber.util";
import hslToHex from "../hsltohex.util";

export default function genColorsComplementary(n) {
    let colors = [];

    let amount = genrandomnumber(7, 10);
    let factor = genrandomnumber(0, 1) === 1 ? 1 : -1;

    let h = genrandomnumber(0, 360);
    let s = genrandomnumber(30, 80);
    let l;
    if (factor === -1) {
        l = genrandomnumber(20 + n * amount, 100);
    } else {
        l = genrandomnumber(20, 100 - n * amount);
    }

    while(true) {
        colors = []
        for (let i = 0; i < n; i++) {
            if (i === Math.round(n/2)) {
                if (factor === -1) {
                    l = genrandomnumber(20 + n * amount, 100);
                } else {
                    l = genrandomnumber(20, 100 - n * amount);
                }

                h += 180;
                if (h > 360) {
                    h -= 360;
                }
            }

            if (!(hslToHex(h, s, l) in colors)) {
                colors.push(hslToHex(h, s, l));
            }
            l += factor * amount;
        }

        if (colors.length === n) {
            break;
        }
    }
    
    return colors;
}