import { ColorFormats } from "../../enums/colorFormat.enum";
import convertColor from "../../utilities/convertColor.util";

let whiteHsl = [0, 0, 100];
let whiteRgb = [255, 255, 255];
let whiteHex = "#ffffff";

test("should return white rgb from hsl", () => {
    expect(
        convertColor(ColorFormats.hsl, ColorFormats.rgb, whiteHsl)
    ).toStrictEqual(whiteRgb);
});

test("should return white hex from hsl", () => {
    expect(convertColor(ColorFormats.hsl, ColorFormats.hex, whiteHsl)).toBe(
        whiteHex
    );
});

test("should return white hsl from rgb", () => {
    expect(
        convertColor(ColorFormats.rgb, ColorFormats.hsl, whiteRgb)
    ).toStrictEqual(whiteHsl);
});

test("should return white hex from rgb", () => {
    expect(convertColor(ColorFormats.rgb, ColorFormats.hex, whiteRgb)).toBe(
        whiteHex
    );
});

test("should return white rgb from hex", () => {
    expect(
        convertColor(ColorFormats.hex, ColorFormats.rgb, whiteHex)
    ).toStrictEqual(whiteRgb);
});

test("should return white hsl from hex", () => {
    expect(
        convertColor(ColorFormats.hex, ColorFormats.hsl, whiteHex)
    ).toStrictEqual(whiteHsl);
});
