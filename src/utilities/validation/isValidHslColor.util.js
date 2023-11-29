/**
 * Validates a hsl color
 * @param {Array<number>} color - Color to be checked ([h, s, l])
 * @returns {boolean}           - Will return true if color is valid
 * @throws                      - Will throw an error if color is invalid
 */
export default function isValidHslColor(color) {
    if (
        Array.isArray(color) &&
        color.length === 3 &&
        color[0] >= 0 &&
        color[0] <= 360 &&
        color[1] >= 0 &&
        color[1] <= 100 &&
        color[2] >= 0 &&
        color[2] <= 100
    ) {
        return true;
    } else {
        throw new Error("Invalid hsl color provided.");
    }
}
