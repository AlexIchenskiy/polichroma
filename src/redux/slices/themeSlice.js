import { createSlice } from "@reduxjs/toolkit";

import genRandomColorRange from "../../utilities/generation/genRandomColor.util";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        // hsl is generally used through the app to store any color value
        color: genRandomColorRange({
            s_min: 80,
            s_max: 90,
            l_min: 45,
            l_max: 55,
        }),
    },
    reducers: {
        updateColor: (state) => {
            state.color = genRandomColorRange({
                s_min: 80,
                s_max: 90,
                l_min: 45,
                l_max: 55,
            });
        },
    },
});

export const { updateColor } = themeSlice.actions;

export default themeSlice.reducer;
