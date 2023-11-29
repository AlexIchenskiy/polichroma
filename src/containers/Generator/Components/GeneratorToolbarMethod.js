import React, { useEffect, useRef, useState } from 'react';

function GeneratorToolbarMethod(props) {
    const [colorHsl, setColorHsl] = useState(`hsl(${props.color[0]}, ${props.color[1]}%, ${props.color[2]}%)`);
    const [active, setActive] = useState(0);
    const [opened, setOpened] = useState(false);
    const wrapperRef = useRef(null);

    function useOutsideDetect(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpened(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
            document.addEventListener("keydown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
                document.removeEventListener("touchstart", handleClickOutside);
                document.removeEventListener("keydown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideDetect(wrapperRef);

    useEffect(() => setColorHsl(`hsl(${props.color[0]}, ${props.color[1]}%, ${props.color[2]}%)`), [props.color]);

    useEffect(() => {
        props.setGenMethod(active);
    }, [active]);

    let elements = [];
    let methods = ['Analogous', 'Monochromatic', 'Complementary', 'Split-Complementary',
        'Square', 'Tetradic', 'Triadic', 'Random'];

    for (let i = 0; i < methods.length; i++) {
        elements.push(
            <div
                className='Generator-toolbar-method-inner-element'
                key={i}
                style={{ color: `${active === i ? colorHsl : ''}` }}
                onClick={() => { setActive(i); setOpened(false) }}
            >
                <h3>{methods[i]}</h3>
            </div>
        )
    }

    return (
        <div
            className='Generator-toolbar-method-outer'
            ref={wrapperRef}
        >
            <div
                className='Generator-toolbar-method'
                style={{ borderColor: colorHsl }}
                onClick={() => setOpened(!opened)}
            >
            </div>
            <div
                className={opened ? 'Generator-toolbar-method-inner opened' : 'Generator-toolbar-method-inner closed'}
                style={{ borderColor: colorHsl }}
            >
                {elements}
            </div>
        </div>
    );
}

export default GeneratorToolbarMethod;