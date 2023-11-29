import { ColorFormats } from "../../enums/colorFormat.enum";
import validateColor from "../validateColor.util";

/**
 * Converts a [h, s, l] array to a hex string
 * @param {Array<number>} color - Color to be converted
 * @returns {string}            - Will return converted color value
 */
export default function hslToHex(color) {
    validateColor(color, ColorFormats.hsl);

    let [h, s, l] = color;

    l /= 100;

    // magic numbers to convert HSL to usable hex value
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0");
    };

    return `#${f(0)}${f(8)}${f(4)}`;
}
