import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Card } from 'ui-neumorphism';

import checkifhex from '../utils/checkifhex.util';

import AppHeader from './appheader.component';
import GeneratorToolbar from './generatortoolbar.component';
import GeneratorPalette from './generatorpalette.component';
import genColorsMonochromatic from '../utils/genmethods/gencolorsmonochromatic.util';

function Generator(props) {
	const [genMethod, setGenMethod]     = useState(0);
	const [colors, setColors]           = useState([]);
	const [colorNumber, setColorNumber] = useState(5);
	const [genColors, setGenColors]     = useState([]);
	const location                      = useLocation();

	let colorsarr      = [];

	useEffect(() => {
		if (location.pathname !== window.location.href.slice(-10)) {
			let toParse = location.pathname.slice(11);
			let color = '';
			colorsarr = [];
			for (let i = 0; i < toParse.length; i++) {
				if (toParse[i] !== '-') {
					color += toParse[i];
				} else {
					color = '';
				}
				if (checkifhex(color)) {
					colorsarr = [...colorsarr, color];
				}
			}
			if (colorsarr.length < 3) {
				colorsarr = [...colorsarr, ...genColorsMonochromatic(3 - colorsarr.length)];
			} else if (colorsarr.length > 5) {
				colorsarr = colorsarr.slice(5);
			}
			props.history.replace('/generator');
			setColors(colorsarr);
			setColorNumber(colorsarr.length);
		} else {
			setColors([]);
		}
	}, [location, props.history]);

	return (
		<Card className='Generator' elevation={2}>
			<AppHeader color={props.color} />
			<GeneratorToolbar color={props.color} colors={genColors} setGenMethod={(e) => setGenMethod(e)} />
			<GeneratorPalette 
				key={genMethod} 
				genMethod={genMethod} 
				colorsarr={colors}
				colornumber={colorNumber}
				setGenColors={(colors) => setGenColors(colors)}
			/>
		</Card>
	);
}

export default Generator;