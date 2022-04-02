import genrandomnumber from "../genrandomnumber.util";
import hslToHex from "../hsltohex.util";

export default function genColorsMonochromatic(n) {
    let colors = [];

    let amount = genrandomnumber(7, 10);
    let factor = genrandomnumber(0, 1) === 1 ? 1 : -1;

    let h = genrandomnumber(0, 360);
    let s = genrandomnumber(0, 100);
    let l;
    if (factor === -1) {
        l = genrandomnumber(20 + n * amount, 100);
    } else {
        l = genrandomnumber(20, 100 - n * amount);
    }
    

    while(true) {
        colors = []
        while (colors.length !== n) {
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