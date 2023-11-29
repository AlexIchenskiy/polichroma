import hslToHex from "../convertation/hslToHex.util";
import genrandomnumber from "../genRandomNumber.util";

export default function genPaletteAnalogous(n) {
    let colors = [];

    let h = genrandomnumber(0, 360);
    let s = genrandomnumber(35, 65);
    let l = genrandomnumber(40, 75);

    while (true) {
        colors = []
        while (colors.length !== n) {
            if (!(hslToHex([h, s, l]) in colors)) {
                colors.push(hslToHex([h, s, l]));
            }

            let factorS = genrandomnumber(0, 1) ? -1 : 1;
            let factorL = genrandomnumber(0, 1) ? -1 : 1;
            let amount = genrandomnumber(0, 7);

            h += genrandomnumber(20, 60);
            s += factorS * amount;
            l += factorL * amount;

            if (h > 360) {
                h -= 360;
            } else if (h < 0) {
                h += 360;
            }
        }
        if (colors.length === n) {
            break;
        }
    }

    return colors;
}