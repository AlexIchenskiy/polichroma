import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useLocation, useNavigate } from 'react-router-dom';

import invertColor from '../../../utilities/invertColor.util';
import isValidHexColor from '../../../utilities/validation/isValidHexColor.util';

import genPaletteAnalogous from '../../../utilities/generation/genPaletteAnalogous.util';
import genPaletteMonochromatic from '../../../utilities/generation/genPaletteMonochromatic.util';
import genPaletteComplementary from '../../../utilities/generation/genPaletteComplementary.util';
import genPaletteSplitComplementary from '../../../utilities/generation/genPaletteSplitComplementary.util';
import genPaletteSquare from '../../../utilities/generation/genPaletteSquare.util';
import genPaletteTetradic from '../../../utilities/generation/genPaletteTetradic.util';
import genPaletteTriadic from '../../../utilities/generation/genPaletteTriadic.util';
import genPaletteRandom from '../../../utilities/generation/genPaletteRandom.util';

import GeneratorToolset from './GeneratorToolset';

function GeneratorPalette(props) {
	let [elements, setElements] = useState(null);
	let [colorNumber, setColorNumber] = useState(props.colornumber);
	let [genMethod, setGenMethod] = useState(props.genMethod);
	let [colors, setColors] = useState(() => props.colorsarr.length === 0 ? genColors() : props.colorsarr);
	let navigate = useNavigate();
	let location = useLocation();

	let colorsarr = [];

	function genColors() {
		switch (genMethod) {
			case 0:
				return genPaletteAnalogous(colorNumber);
			case 1:
				return genPaletteMonochromatic(colorNumber);
			case 2:
				return genPaletteComplementary(colorNumber);
			case 3:
				return genPaletteSplitComplementary(colorNumber);
			case 4:
				return genPaletteSquare(colorNumber);
			case 5:
				return genPaletteTetradic(colorNumber);
			case 6:
				return genPaletteTriadic(colorNumber);
			case 7:
				return genPaletteRandom(colorNumber);
			default:
				return genPaletteAnalogous(colorNumber);
		}
	}

	let handleSwipe = () => {
		setTimeout(handleGenerate(), 100);
	}

	let handleGenerate = () => {
		let colorarr = genColors();
		setColors(colorarr);
		let colorlink = '';
		for (let i = 0; i < colors.length; i++) {
			if (i !== 0) {
				colorlink += '-';
			}
			colorlink += colors[i];
		}
		// navigate('/generator/' + colorlink);
	}

	useEffect(() => {
		let handleKeyPress = (target) => {
			if (target.keyCode === 32) {
				setTimeout(handleGenerate(), 100);
			}
		}

		document.addEventListener("keypress", handleKeyPress);

		return () => {
			document.removeEventListener("keypress", handleKeyPress);
		}
	});

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
				if (isValidHexColor(color)) {
					colorsarr = [...colorsarr, color];
				}
			}
			if (colorsarr.length < 3) {
				colorsarr = [...colorsarr, ...genPaletteMonochromatic(3 - colorsarr.length)];
			} else if (colorsarr.length > 5) {
				colorsarr = colorsarr.slice(5);
			}
			if (colorsarr !== colors) {
				setColors(colorsarr);
				setColorNumber(colorsarr.length);
			}
		}
	}, [location, props.history]);

	useEffect(() => {
		setGenMethod(props.genMethod);
	}, [props.genMethod]);

	useEffect(() => {
		let elements = [];

		let s = "";
		let styles = [];
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < colorNumber; j++) {
				s += "%c       %c ";
				styles.push(`background: ${colors[j]};`);
				styles.push("background: null");
			}
			s += '\n';
		}

		console.log(s, ...styles);
		console.log(colors.join("  "));

		for (let i = 0; i < colors.length; i++) {
			elements.push(
				<div className='Generator-palette-color' key={`${colors[i]}`} style={{ backgroundColor: `${colors[i]}` }}>
					<GeneratorToolset
						textColor={invertColor(colors[i], 1).toUpperCase()}
						color={colors[i].toUpperCase()}
					/>
				</div>
			);
		}

		setElements(elements);
	}, [colors, colorNumber]);

	const handlers = useSwipeable({
		onSwipedUp: () => handleSwipe()
	});

	return (
		<div className='Generator-palette-outer' {...handlers} >
			<div className='Generator-palette-inner'>
				{elements}
			</div>
		</div>
	);
}

export default GeneratorPalette;