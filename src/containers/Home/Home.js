import "./Home.scss";
import "./Home.responsive.scss";

import Button from "../../components/Button/Button";
import HeaderImage from "./components/HeaderImage";
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <>
            <header>
                <div className="header-text">
                    <div className="header-text-content">
                        <h1>
                            <span>poli</span>
                            <span
                                className="header-animated-title"
                                style={{
                                    color: `hsl(${props.color[0]}, ${props.color[1]}%, ${props.color[2]}%)`,
                                }}
                            >
                                chroma
                            </span>
                        </h1>
                        <div>
                            <h2>
                                <span className="header-subtitle-outer">
                                    <span className="header-subtitle-inner">
                                        Create with
                                    </span>
                                </span>
                                <span className="header-subtitle-outer">
                                    <span className="header-subtitle-inner">
                                        <span
                                            style={{
                                                color: `hsl(${props.color[0]}, ${props.color[1]}%, ${props.color[2]}%)`,
                                            }}
                                        >
                                            palettes
                                        </span>{" "}
                                        you love.
                                    </span>
                                </span>
                            </h2>
                            <h3>
                                <span>
                                    Polichroma is an endless source of vibrant
                                    color palettes for you to create, discover
                                    and work with.
                                </span>
                            </h3>
                        </div>
                        <div className="header-button">
                            <Link to="/generator">
                                <Button text="Generate" color={props.themeColor} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-image">
                    <HeaderImage color={props.themeColor} />
                </div>
            </header>
        </>
    );
}

export default Home;
