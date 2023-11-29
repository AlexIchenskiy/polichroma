import { ColorFormats } from "../enums/colorFormat.enum";
import convertColor from "./convertColor.util";
import validateColor from "./validateColor.util";

/**
 * Prints provided colors to console in fancy format
 * @param {Array<Array<number>>} colors - Source colors in [h, s, l] format
 */
export default function consoleLogColors(...colors) {
    for (let i = 0; i < arguments.length; i++) {
        validateColor(colors[i], ColorFormats.hsl);
    }
    let out = "";
    let styles = [];

    // create fancy styled color blocks to output
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < arguments.length; j++) {
            out += "%c       %c ";
            styles.push(
                `background: ${convertColor(
                    ColorFormats.hsl,
                    ColorFormats.hex,
                    colors[j]
                )};`
            );
            styles.push("background: null");
        }
        out += "\n";
    }

    console.log(out, ...styles);
    console.log(
        colors
            .map((c) => convertColor(ColorFormats.hsl, ColorFormats.hex, c))
            .join("  ")
    );
}
