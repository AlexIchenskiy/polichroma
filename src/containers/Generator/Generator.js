import React, { useState } from 'react';
import './Generator.scss';

import GeneratorPalette from './Components/GeneratorPalette';
import GeneratorToolbar from './Components/GeneratorToolbar';

function Generator(props) {
	const [genMethod, setGenMethod] = useState(0);
	const [colors, setColors] = useState([]);
	const [colorNumber, setColorNumber] = useState(5);

	return (
		<div className='Generator'>
			<GeneratorToolbar color={props.color} setGenMethod={(e) => setGenMethod(e)} />
			<GeneratorPalette
				key={genMethod}
				genMethod={genMethod}
				colorsarr={colors}
				colornumber={colorNumber}
			/>
		</div>
	);
}

export default Generator;