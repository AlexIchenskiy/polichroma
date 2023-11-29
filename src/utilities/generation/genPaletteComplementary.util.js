import genrandomnumber from "../genRandomNumber.util";
import hslToHex from "../convertation/hslToHex.util";

export default function genPaletteComplementary(n) {
    let colors = [];

    let amount = genrandomnumber(7, 10);
    let factor = 1;
    let after = genrandomnumber(0, 1) === 0 ? Math.round(n / 2) : Math.floor(n / 2);

    let h = genrandomnumber(0, 360);
    let s = genrandomnumber(10, 90);
    let l = genrandomnumber(10, 100 - n * amount);

    while (true) {
        colors = []
        for (let i = 0; i < n; i++) {
            if (i === after) {
                factor = -1;
                l = genrandomnumber(10 + n * amount, 100);
                s = genrandomnumber(10, 90);

                h += 180;
                if (h > 360) {
                    h -= 360;
                }
            }

            if (!(hslToHex([h, s, l]) in colors)) {
                colors.push(hslToHex([h, s, l]));
            }
            l += factor * amount;
        }

        if (colors.length === n) {
            break;
        }
    }

    return colors;
}