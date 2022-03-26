import React, { useEffect, useState } from 'react';

import { Card } from 'ui-neumorphism';

import AppHeader from './appheader.component';
import GeneratorToolbar from './generatortoolbar.component';
import GeneratorPalette from './generatorpalette.component';

function Generator(props) {
	const [genMethod, setGenMethod] = useState(0);

	return (
		<Card className='Generator' elevation={2}>
			<AppHeader color={props.color} />
			<GeneratorToolbar color={props.color} setGenMethod={(e) => setGenMethod(e)} />
			<GeneratorPalette key={genMethod} genMethod={genMethod} />
		</Card>
	);
}

export default Generator;