/**
 * Generates a random hsl color
 * @param {object} [hsl]    - Optional color data to generate on (predefined h, s and l values and min/max hue, saturation and lightness values)
 * @returns {Array<number>} - Will return a generated [h, s, l] color
 * @throws                  - Will throw an error if color data is invalid
 */
export default function genRandomColor({
    h,
    s,
    l,
    h_min = 0,
    h_max = 360,
    s_min = 0,
    s_max = 100,
    l_min = 0,
    l_max = 100,
} = {}) {
    // check if arguments are correct
    if (h_min < 0 || s_min < 0 || l_min < 0) {
        throw new Error("Non-negative arguments required.");
    }
    if (h_max > 360) {
        throw new Error("Argument h must be in range (0, 360)");
    }
    if (l_max > 100 || s_max > 100) {
        throw new Error("Arguments l and s must be in range (0, 100)");
    }
    if (h < 0 || h > 360) {
        throw new Error("Argument h must be in range (0, 360)");
    }
    if (l < 0 || l > 100 || s < 0 || s > 100) {
        throw new Error("Arguments l and s must be in range (0, 100)");
    }

    // set lower/upper bounds for h, s and l values using provided arguments
    // default values are h = (0-360), s, l = (0-100)
    let h_low = h_min || 0;
    let h_high = h_max || 360;
    let s_low = s_min || 0;
    let s_high = s_max || 100;
    let l_low = l_min || 0;
    let l_high = l_max || 100;

    // generate h, s and l values
    let hue = h || Math.floor(Math.random() * (h_high - h_low) + h_low);
    let sat = s || Math.floor(Math.random() * (s_high - s_low) + s_low);
    let lgt = l || Math.floor(Math.random() * (l_high - l_low) + l_low);

    return [hue, sat, lgt];
}
