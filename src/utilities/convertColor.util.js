import { ColorFormats } from "../enums/colorFormat.enum";
import hexToHsl from "./convertation/hexToHsl.util";
import hexToRgb from "./convertation/hexToRgb.util";
import hslToHex from "./convertation/hslToHex.util";
import hslToRgb from "./convertation/hslToRgb.util";
import rgbToHex from "./convertation/rgbToHex.util";
import rgbToHsl from "./convertation/rgbToHsl.util";

/**
 * Converts provided color to desired format
 * @param {ColorFormats} from            - Source color format
 * @param {ColorFormats} to              - Destination color format
 * @param {string | Array<number>} color - Color (string for hex, array for hsl/rgb)
 * @returns {string | Array<number>}     - Will return converted color
 * @throws                               - Will throw an error if color format is invalid
 */
export default function convertColor(from, to, color) {
    if (
        !Object.values(ColorFormats).includes(from) ||
        !Object.values(ColorFormats).includes(to)
    ) {
        throw new Error("Provided color formats are invalid.");
    } else if (from === ColorFormats.hex) {
        if (to === ColorFormats.hex) {
            return color;
        } else if (to === ColorFormats.hsl) {
            return hexToHsl(color);
        } else if (to === ColorFormats.rgb) {
            return hexToRgb(color);
        }
    } else if (from === ColorFormats.hsl) {
        if (to === ColorFormats.hex) {
            return hslToHex(color);
        } else if (to === ColorFormats.hsl) {
            return color;
        } else if (to === ColorFormats.rgb) {
            return hslToRgb(color);
        }
    } else if (from === ColorFormats.rgb) {
        if (to === ColorFormats.hex) {
            return rgbToHex(color);
        } else if (to === ColorFormats.hsl) {
            return rgbToHsl(color);
        } else if (to === ColorFormats.rgb) {
            return color;
        }
    }
}
