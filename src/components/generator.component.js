import React from 'react';

import { Redirect } from 'react-router-dom'

import { Card } from 'ui-neumorphism';

import AppHeader from './appheader.component';
import GeneratorToolbar from './generatortoolbar.component';
import GeneratorPalette from './generatorpalette.component';

function Generator(props) {
	function genColors(n) {
	    let colors = '';
	    for (let i = 0; i < n; i++) {
	      colors += (((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6)) + '-';
	    }
	    return colors.slice(0, -1);
	}

	let handleKeyUp = (target) => {
		if(target.keyCode === 32) {
			<Redirect to={'generator/' + genColors(4)} push />
		}
	}

	document.addEventListener("keyup", handleKeyUp);

	return (
		<Card className='Generator' elevation={2}>
			<AppHeader color={props.color} />
			<GeneratorToolbar />
			<GeneratorPalette />
		</Card>
	);
}

export default Generator;