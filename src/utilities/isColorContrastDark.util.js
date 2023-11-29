import { ColorFormats } from "../enums/colorFormat.enum";
import convertColor from "./convertColor.util";

/**
 * Checks if color contrasts better with dark colors
 * @param {Array<number>} color - The target hsl color ([h, s, l])
 * @returns {boolean}           - Will return true if the color contrasts better with the dark colors
 */
export default function isColorContrastDark(color) {
    let [r, g, b] = convertColor(ColorFormats.hsl, ColorFormats.rgb, color);

    // magic numbers
    if (r * 0.299 + g * 0.587 + b * 0.114 > 128) {
        return true;
    }

    return false;
}
