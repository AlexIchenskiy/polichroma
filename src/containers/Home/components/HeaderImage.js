import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Canvas from "../../../components/Canvas/Canvas";

import { ColorFormats } from "../../../enums/colorFormat.enum";
import { updateColor } from "../../../redux/slices/themeSlice";
import convertColor from "../../../utilities/convertColor.util";

function HeaderImage(props) {
    const [ctx, setCtx] = useState(null);

    const dispatch = useDispatch();

    const establishContext = (context) => {
        setCtx(context);
    };

    const draw = () => {
        if (ctx) {
            let points = [],
                colors = [];
            let color = [...props.color];

            for (let i = 0; i < 4; i++) {
                points.push((i * ctx.canvas.height) / 4);
            }

            color[2] += 30;

            for (let i = 0; i < 4; i++) {
                colors.push(
                    convertColor(ColorFormats.hsl, ColorFormats.hex, color)
                );
                color[2] -= 10;
            }

            ctx.fillStyle = colors[0];
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            for (let i = 1; i < 4; i++) {
                ctx.fillStyle = colors[i];
                ctx.strokeStyle = colors[i];
                ctx.lineWidth = 1;
                ctx.moveTo(0, points[i]);
                ctx.beginPath();
                for (let j = 0; j < ctx.canvas.width + 1; j++) {
                    let y = Math.sin(
                        j * (0.017 - i * 0.001 * 3) +
                            Date.now() * (0.0005 + i * 0.0005)
                    );
                    ctx.lineTo(j - 1, points[i] + y * (20 + i));
                    ctx.lineTo(j - 1, ctx.canvas.height);
                    ctx.moveTo(j - 1, points[i] + y * (20 + i));
                }
                ctx.stroke();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleSpaceDown);
        window.addEventListener("keyup", handleSpaceUp);

        return () => {
            window.removeEventListener("keydown", handleSpaceDown);
            window.removeEventListener("keyup", handleSpaceUp);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // is space button up
    let isUp = true;

    const handleSpaceDown = (e) => {
        // change themeColor on space pressed while on homepage
        if (e.keyCode === 32 && isUp) {
            dispatch(updateColor());
            isUp = false;
        }
    };

    const handleSpaceUp = (e) => {
        // handle space pressing to prevent multiple color updates
        if (e.keyCode === 32 && !isUp) {
            isUp = true;
        }
    };

    return (
        <Canvas
            draw={draw}
            establishContext={establishContext}
            onClick={() => dispatch(updateColor())}
        />
    );
}

export default HeaderImage;
