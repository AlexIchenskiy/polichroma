import isColorContrastDark from "../../utilities/isColorContrastDark.util";

test("white contrasts better with dark colors", () => {
    expect(isColorContrastDark([100, 100, 100])).toBeTruthy();
});

test("black contrasts better with light colors", () => {
    expect(isColorContrastDark([100, 0, 0])).toBeFalsy();
});

test("light contrasts better with dark colors", () => {
    // very high lightness
    expect(isColorContrastDark([100, 50, 90])).toBeTruthy();
});

test("dark contrasts better with light colors", () => {
    // very low lightness
    expect(isColorContrastDark([100, 50, 10])).toBeFalsy();
});
