import { ColorFormats } from "../../enums/colorFormat.enum";
import validateColor from "../validateColor.util";

/**
 * Converts a string hex to an [r, g, b] array
 * @param {string} color    - Color to be converted
 * @returns {Array<number>} - Will return converted color value
 */
export default function hexToRgb(color) {
    validateColor(color, ColorFormats.hex);

    // handle shorthand hex ("#fff")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    color = color.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let rgb = color.slice(1).match(/.{1,2}/g);

    rgb = [parseInt(rgb[0], 16), parseInt(rgb[1], 16), parseInt(rgb[2], 16)];

    return rgb;
}
