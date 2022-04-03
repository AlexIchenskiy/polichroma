import React, { useEffect, useRef, useState } from 'react';

import { Button, Card } from 'ui-neumorphism';

function GeneratorToolbarMethod(props) {
    const [colorHsl, setColorHsl] = useState(`hsl(${props.color}, 100%, 50%)`);
	const [active, setActive]     = useState(0);
    const [opened, setOpened]     = useState(false);
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

    useEffect(() => setColorHsl(`hsl(${props.color}, 100%, 50%)`), [props.color]);

    useEffect(() => {
        props.setGenMethod(active);
    }, [active]);

    let elements = [];
    let methods  = ['Analogous', 'Monochromatic', 'Complementary', 'Split-Complementary',
                    'Square', 'Tetradic', 'Triadic', 'Random'];

    for (let i = 0; i < methods.length; i++) {
        elements.push(
            <Button 
                    className = 'Generator-toolbar-method-inner-element' 
                    key       = {i}
                    text      = {active !== i}
                    flat      = {active === i}
                    bordered  = {false}
                    color     = {active === i ? colorHsl : 'initial'}
                    onClick   = {() => {setActive(i);setOpened(false)}}
                >
                    <h3>{methods[i]}</h3>
                </Button>
        )
    }

    return (
        <div 
            className='Generator-toolbar-method-outer'
            ref={wrapperRef}
        >
            <div 
                className='Generator-toolbar-method'
                style={{borderColor: colorHsl}}
                onClick={() => setOpened(!opened)}
            >
            </div>
            <Card 
                className={opened ? 'Generator-toolbar-method-inner opened' : 'Generator-toolbar-method-inner closed'}
                flat bordered 
            >
                {elements}
            </Card>
        </div>
    );
}

export default GeneratorToolbarMethod;