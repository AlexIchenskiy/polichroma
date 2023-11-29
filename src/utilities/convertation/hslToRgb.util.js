import { ColorFormats } from "../../enums/colorFormat.enum";
import validateColor from "../validateColor.util";

/**
 * Converts a [h, s, l] array to an [r, g, b] array
 * @param {Array<number>} color - Color to be converted
 * @returns {Array<number>}     - Will return converted color value
 */
export default function hslToRgb(color) {
    validateColor(color, ColorFormats.hsl);

    let [h, s, l] = color;

    s /= 100;
    l /= 100;

    // magic numbers to convert hsl to rgb
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);

    const f = (n) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    return [255 * f(0), 255 * f(8), 255 * f(4)];
}
