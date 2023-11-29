import { ColorFormats } from "../enums/colorFormat.enum";
import isValidHexColor from "./validation/isValidHexColor.util";
import isValidHslColor from "./validation/isValidHslColor.util";
import isValidRgbColor from "./validation/isValidRgbColor.util";

/**
 * Validates a color by provided format
 * @param {string | Array<number>} color - The target color (string for hex, Array for rgb/hsl)
 * @param {ColorFormats} format          - The target format to validate for
 * @returns {boolean}                    - Will return true if color is valid
 * @throws                               - Will throw an error if color is invalid
 */
export default function validateColor(color, format) {
    if (!Object.values(ColorFormats).includes(format)) {
        throw new Error("Provided color format is invalid.");
    } else if (format === ColorFormats.hex) {
        return isValidHexColor(color);
    } else if (format === ColorFormats.hsl) {
        return isValidHslColor(color);
    } else if (format === ColorFormats.rgb) {
        return isValidRgbColor(color);
    }
}
