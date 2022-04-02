import React, { useEffect, useRef, useState } from 'react';
import { setUserAgent } from 'react-device-detect';

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
    }, [active])

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
                <Button 
                    className='Generator-toolbar-method-inner-element' 
                    text={active !== 0}
                    flat={active === 0}
                    bordered={false}
                    onClick={() => {setActive(0);setOpened(false)}}
                >
                    <h3>Analogous</h3>
                </Button>
                <Button 
                    className='Generator-toolbar-method-inner-element' 
                    text={active !== 1}
                    flat={active === 1}
                    bordered={false}
                    onClick={() => {setActive(1);setOpened(false)}}
                >
                    <h3>Monochromatic</h3>
                </Button>
                <Button 
                    className='Generator-toolbar-method-inner-element' 
                    text={active !== 2}
                    flat={active === 2}
                    bordered={false}
                    onClick={() => {setActive(2);setOpened(false)}}
                >
                    <h3>Complementary</h3>
                </Button>
                <Button 
                    className='Generator-toolbar-method-inner-element' 
                    text={active !== 3}
                    flat={active === 3}
                    bordered={false}
                    onClick={() => {setActive(3);setOpened(false)}}
                >
                    <h3>Split-Complementary</h3>
                </Button>
                <Button 
                    className='Generator-toolbar-method-inner-element' 
                    text={active !== 4}
                    flat={active === 4}
                    bordered={false}
                    onClick={() => {setActive(4);setOpened(false)}}
                >
                    <h3>Random</h3>
                </Button>
            </Card>
        </div>
    );
}

export default GeneratorToolbarMethod;