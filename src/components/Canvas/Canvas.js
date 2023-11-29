import { useEffect, useRef, useState } from "react";

function Canvas(props) {
    const { draw, establishContext } = props;

    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);

    // canvas context
    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            setContext(ctx);
            if (establishContext) {
                establishContext(ctx);
            }
        }
    }, [establishContext]);

    // animation api logic
    useEffect(() => {
        let animationFrameId;

        if (context) {
            const render = () => {
                resizeCanvas(context);
                setTimeout(draw(), 35);
                animationFrameId = window.requestAnimationFrame(render);
            };
            render();
        }
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, context]);

    const resizeCanvas = (context) => {
        const canvas = context.canvas;
        const { width, height } = canvas.getBoundingClientRect();

        if (canvas.width !== width || canvas.height !== height) {
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            canvas.imageSmoothingEnabled = false;
            return true;
        }
        return false;
    };

    return <canvas ref={canvasRef} onClick={props.onClick} />;
}

export default Canvas;
