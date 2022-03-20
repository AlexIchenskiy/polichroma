import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import { Card } from 'ui-neumorphism';

import invertColor from '../utils/invertcolor.util';
import GeneratorToolset from './generatortoolset.component';

import genColorsRandom from '../utils/gencolorsrandom.util';
import genColorsMonochromatic from '../utils/gencolorsmonochromatic.util';

function GeneratorPalette() {
	let [colors, setColors]     = useState(genColorsMonochromatic(4));
	let [elements, setElements] = useState(null);
	let [isReady, setIsReady]   = useState(true);

	let handleKeyPress = (target) => {
		if(target.keyCode === 32) {
			setTimeout(handleGenerate(), 100);
		}
	}

	let handleSwipe = () => {
		setTimeout(handleGenerate(), 100);
	}

	let handleGenerate = () => {
		let colors = genColorsMonochromatic(4);
		console.log(colors);
		
		setColors(colors);
	}

	useEffect(() => {
		document.addEventListener("keypress", handleKeyPress);
	}, []);

	useEffect(() => {
		let elements = [];

		let s = "";
		let styles = [];
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 4; j++) {
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