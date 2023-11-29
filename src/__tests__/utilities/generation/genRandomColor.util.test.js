import genRandomColor from "../../../utilities/generation/genRandomColor.util";

test("should return a valid [h, s, l] color", () => {
    // run a few times to test if random generation works correctly
    for (let i = 0; i < 100; i++) {
        let result = genRandomColor();
        expect(result).toHaveLength(3);
        // hue to be in (0, 360)
        expect(result[0]).toBeGreaterThanOrEqual(0);
        expect(result[0]).toBeLessThanOrEqual(360);
        // saturation to be in (0, 100)
        expect(result[1]).toBeGreaterThanOrEqual(0);
        expect(result[1]).toBeLessThanOrEqual(100);
        // lightness to be in (0, 100)
        expect(result[2]).toBeGreaterThanOrEqual(0);
        expect(result[2]).toBeLessThanOrEqual(100);
    }
});
