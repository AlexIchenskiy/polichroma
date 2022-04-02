import hslToHex from "../hsltohex.util";
import genrandomnumber from "../genrandomnumber.util";

export default function genColorsAnalogous(n) {
    let colors = [];

    let h = genrandomnumber(0, 360);
    let s = genrandomnumber(35, 65);
    let l = genrandomnumber(40, 75);

    while(true) {
        colors = []
        while (colors.length !== n) {
            if (!(hslToHex(h, s, l) in colors)) {
                colors.push(hslToHex(h, s, l));
            }
            h += genrandomnumber(20, 60);
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