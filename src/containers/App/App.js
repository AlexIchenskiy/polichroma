import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import consoleLogColors from "../../utilities/consoleLogColors.util";

import Home from "../Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Generator from "../Generator/Generator";

function App() {
    // global themeColor stored as hsl
    const themeColor = useSelector((state) => state.theme.color);

    const [first, setFirst] = useState(true);

    // color change animation logic variables
    const [color, setColor] = useState(themeColor);
    const [dir, setDir] = useState(1);

    // first-time console output for developers
    useEffect(() => {
        console.log("Hello dev!");
        console.log("Here is your theme color for today: ");
        consoleLogColors(themeColor);
        setFirst(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // on theme color change console output for developers
    useEffect(() => {
        if (!first) {
            setColor(themeColor);
            console.log("Here is your new theme color: ");
            consoleLogColors(themeColor);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeColor]);

    // color change animation
    useEffect(() => {
        let colorL = color[2];

        // interval to keep animation contionuosly
        let interval = setInterval(() => {
            colorL = colorL + dir * 0.5;
            // switch color change direction on edge values
            if (colorL > (themeColor[2] + 25) % 100) {
                setDir(-1);
                colorL = themeColor[2] + 25;
            } else if (colorL < (themeColor[2] - 5) % 100) {
                setDir(1);
                colorL = themeColor[2] - 5;
            }
            setColor([color[0], color[1], colorL]);
        }, 100);

        return () => clearInterval(interval);
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navigate to="/home" />} />
                <Route exact path="/home" element={<Home themeColor={themeColor} color={color} />} />
                <Route exact path="/generator" element={<Generator themeColor={themeColor} color={color} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
