import { ColorFormats } from "../../enums/colorFormat.enum";
import validateColor from "../validateColor.util";

/**
 * Converts an [r, g, b] array to a hex string
 * @param {Array<number>} color - Color to be converted
 * @returns {string}            - Will return converted color value
 */
export default function rgbToHex(color) {
    validateColor(color, ColorFormats.rgb);

    return (
        "#" +
        ((1 << 24) | (color[0] << 16) | (color[1] << 8) | color[2])
            .toString(16)
            .slice(1)
    );
}
