import { ColorFormats } from "../../enums/colorFormat.enum";
import validateColor from "../../utilities/validateColor.util";

let whiteHsl = [0, 0, 100];
let whiteRgb = [255, 255, 255];
let whiteHex = "#ffffff";

test("should return true for a valid hsl color", () => {
    expect(validateColor(whiteHsl, ColorFormats.hsl)).toBeTruthy();
});

test("should return true for a valid rgb color", () => {
    expect(validateColor(whiteRgb, ColorFormats.rgb)).toBeTruthy();
});

test("should return true for a valid hex color", () => {
    expect(validateColor(whiteHex, ColorFormats.hex)).toBeTruthy();
});

let newWhiteHsl = [0, 0, -100];
let newWhiteRgb = [255, 255, 256];
let newWhiteHex = "#ffffffF";

test("should throw an error for an invalid hsl color", () => {
    expect(() => validateColor(newWhiteHsl, ColorFormats.hsl)).toThrow();
});

test("should throw an error for an invalid rgb color", () => {
    expect(() => validateColor(newWhiteRgb, ColorFormats.rgb)).toThrow();
});

test("should throw an error for an invalid hex color", () => {
    expect(() => validateColor(newWhiteHex, ColorFormats.hex)).toThrow();
});
