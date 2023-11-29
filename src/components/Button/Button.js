import isColorContrastDark from "../../utilities/isColorContrastDark.util";
import "./Button.scss";

function Button(props) {
    let color = props.color;
    const styles = {
        backgroundImage: `linear-gradient(90deg, hsl(${color[0]}, ${color[1]}%, ${color[2]}%) 50%, 
             rgba(0, 0, 0, 0) 0)`,
        boxShadow: `inset 0 0 0 2px hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`,
    };

    return (
        <>
            <button
                className={
                    "button-outlined " +
                    (isColorContrastDark(color) ? "button-outlined-dark" : "")
                }
                style={styles}
            >
                <b>{props.text}</b>
                <span className="button-arrow" />
            </button>
        </>
    );
}

export default Button;
