import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import { Card } from 'ui-neumorphism';

import invertColor from '../utils/invertcolor.util';
import GeneratorToolset from './generatortoolset.component';

import genColorsAnalogous from '../utils/genmethods/gencolorsanalogous.util';
import genColorsRandom from '../utils/genmethods/gencolorsrandom.util';
import genColorsMonochromatic from '../utils/genmethods/gencolorsmonochromatic.util';
import genColorsComplementary from '../utils/genmethods/gencolorscomplementary.util';
import genColorsSplitComplementary from '../utils/genmethods/gencolorssplitcomplementary.util';
import genColorsSquare from '../utils/genmethods/gencolorssquare.util';
import genColorsTetradic from '../utils/genmethods/gencolorstetradic.util';
import genColorsTriadic from '../utils/genmethods/gencolorstriadic.util';

function GeneratorPalette(props) {
	let [elements, setElements]         = useState(null);
	let [colorNumber, setIsColorNumber] = useState(5);
	let [genMethod, setGenMethod]       = useState(props.genMethod);
	let [colors, setColors]             = useState(genColors());

	function genColors() {
		switch(genMethod) {
			case 0:
				return genColorsAnalogous(colorNumber);
			case 1:
				return genColorsMonochromatic(colorNumber);
			case 2:
				return genColorsComplementary(colorNumber);
			case 3:
				return genColorsSplitComplementary(colorNumber);
			case 4:
				return genColorsSquare(colorNumber);
			case 5:
				return genColorsTetradic(colorNumber);
			case 6:
				return genColorsTriadic(colorNumber);
			case 7:
				return genColorsRandom(colorNumber);
			default:
				return genColorsAnalogous(colorNumber);
		}
	}

	let handleKeyPress = (target) => {
		if(target.keyCode === 32) {
			setTimeout(handleGenerate(), 100);
		}
	}

	let handleSwipe = () => {
		setTimeout(handleGenerate(), 100);
	}

	let handleGenerate = () => {
		let colorarr = genColors;
		setColors(colorarr);
	}

	useEffect(() => {
		document.addEventListener("keypress", handleKeyPress);
	}, []);

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
				styles.push(`background: #${colors[j]};`);
				styles.push("background: null");
			}
			s += '\n';
		}
		
		console.log(s, ...styles);
		console.log(colors.join("  "));

		for (let i = 0; i < colors.length; i++) {
			elements.push(
				<div className='Generator-palette-color' key={`#${colors[i]}`} style={{backgroundColor: `#${colors[i]}`}}>
					<GeneratorToolset 
						textColor = {invertColor(colors[i], 1).toUpperCase()} 
						color = {colors[i].toUpperCase()}
					/>
				</div>
			);
		}

		setElements(elements);
	}, [colors]);

	const handlers = useSwipeable({
		onSwipedUp: () => handleSwipe()
	});

	return (
		<div className='Generator-palette-outer' elevation={2} {...handlers} >
			<Card className='Generator-palette-inner' inset >
				{elements}
			</Card>
		</div>
	);
}

export default GeneratorPalette;