/**
 * Validates a hex color
 * @param {string} color - Color to be checked
 * @returns {boolean}    - Will return true if color is valid
 * @throws               - Will throw an error if color is invalid
 */
export default function isValidHexColor(color) {
    // "#fff", "#FFF", "#fffFFF", "#FFFfff", "#000FFF", "#000", etc.
    if (typeof color !== "string") {
        throw new Error("Invalid hex color provided.");
    }
    const hexRegex = /#(([0-9a-fA-F]{2}){3,4}|([0-9a-fA-F]){3,4})/g;
    const match = color.match(hexRegex);

    if (match.length !== 1 || match[0] !== color) {
        throw new Error("Invalid hex color provided.");
    }

    const length = match[0].length;

    if (length === 4 || length === 7) {
        return true;
    } else {
        throw new Error("Invalid hex color provided.");
    }
}
