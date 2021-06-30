import React from 'react';

import { Card } from 'ui-neumorphism';

function GeneratorPalette() {
	let colors = window.location.pathname.slice(22).split('-').filter((el) => el !== '');

	let elements = [];

	for (let i = 0; i < colors.length; i++) {
		elements.push(
			<div className='Generator-palette-color' key={`#${colors[i]}`} style={{backgroundColor: `#${colors[i]}`}}>
			</div>
		);
	}

	return (
		<div className='Generator-palette-outer' elevation={2}>
			<Card className='Generator-palette-inner'>
				{elements}
			</Card>
		</div>
	);
}

export default GeneratorPalette;