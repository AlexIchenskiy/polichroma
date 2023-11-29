import hslToHex from "./convertation/hslToHex.util";

export default function genColorShades(h, s, l, direction, amount, shades) {
    let colors = [];

    for (let i = 0; i < shades; i++) {
        l += direction * amount;
        if (l < 0) {
            l += 100;
        } else if (l > 100) {
            l -= 100;
        }
        colors.push(hslToHex([h, s, l]));
    }

    return colors;
}