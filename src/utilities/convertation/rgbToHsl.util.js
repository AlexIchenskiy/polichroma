import { ColorFormats } from "../../enums/colorFormat.enum";
import validateColor from "../validateColor.util";

/**
 * Converts an [r, g, b] array to a [h, s, l] array
 * @param {Array<number>} color - Color to be converted
 * @returns {Array<number>}     - Will return converted color value
 */
export default function rgbToHsl(color) {
    validateColor(color, ColorFormats.rgb);

    let [r, g, b] = color;

    r /= 255;
    g /= 255;
    b /= 255;

    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
        ? l === r
            ? (g - b) / s
            : l === g
            ? 2 + (b - r) / s
            : 4 + (r - g) / s
        : 0;

    return [
        60 * h < 0 ? 60 * h + 360 : 60 * h,
        100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        (100 * (2 * l - s)) / 2,
    ];
}
