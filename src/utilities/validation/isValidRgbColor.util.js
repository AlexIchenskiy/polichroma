/**
 * Validates an rgb color
 * @param {Array<number>} color - Color to be checked ([r, g, b])
 * @returns {boolean}           - Will return true if color is valid
 * @throws                      - Will throw an error if color is invalid
 */
export default function isValidRgbColor(color) {
    if (
        Array.isArray(color) &&
        color.length === 3 &&
        color[0] >= 0 &&
        color[0] <= 255 &&
        color[1] >= 0 &&
        color[1] <= 255 &&
        color[2] >= 0 &&
        color[2] <= 255
    ) {
        return true;
    } else {
        throw new Error("Invalid rgb color provided.");
    }
}
