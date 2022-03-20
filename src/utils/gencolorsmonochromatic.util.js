import hslToHex from "./hsltohex.util";
import genrandomnumber from "./genrandomnumber.util";

export default function genColorsMonochromatic(n) {
    let colors = [];

    let h = genrandomnumber(n*5, 360 - n*5);
    let s = genrandomnumber(0, 100);
    let l = genrandomnumber(50, 100);

    while(true) {
        colors = []
        while (colors.length != n) {
            if (!(hslToHex(h, s, l) in colors)) {
                colors.push(hslToHex(h, s, l));
            }
            l -= genrandomnumber(5, 10);
            h -= genrandomnumber(-5, 5);
        }
        if (colors.length === n) {
            break;
        }
    }
    
    return colors;
}