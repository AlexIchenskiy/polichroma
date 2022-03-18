import React from 'react';

import { Card } from 'ui-neumorphism';

import AppHeader from './appheader.component';
import GeneratorToolbar from './generatortoolbar.component';
import GeneratorPalette from './generatorpalette.component';

function Generator(props) {
	return (
		<Card className='Generator' elevation={2}>
			<AppHeader color={props.color} />
			<GeneratorToolbar />
			<GeneratorPalette />
		</Card>
	);
}

export default Generator;